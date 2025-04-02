import assert from "node:assert";
import { truncate } from "~/casing";
import type {
	ParamBaseProps,
	ExtractParam,
	ParamLocation,
	StringParam,
	ParamSkipReason,
} from "~/types";
import type { OpenApiSpec } from "~/types";

export class ParamExtractor {
	fromSpecParams(specParams: OpenApiSpec.ParameterObject[]) {
		const extractParams: ExtractParam[] = [];

		for (const specParam of specParams) {
			let { schema } = specParam;

			if (!schema) {
				this.skipParam(specParam, "missing-schema");
				continue;
			}

			if (schema.allOf) schema = this.mergeSchemas(schema.allOf);
			if (schema.anyOf) schema = schema.anyOf[0];
			if (schema.oneOf) schema = schema.oneOf[0];

			if (
				!schema.type &&
				schema.enum &&
				schema.enum.length > 0 &&
				typeof schema.enum[0] === "string"
			) {
				schema.type = "string";
			}

			if (!schema.type) {
				this.skipParam(specParam, "missing-param-type");
				continue;
			}

			specParam.schema = schema;
			const param = this.extractParam(specParam);
			if (param) extractParams.push(param);
		}

		return extractParams;
	}

	fromSpecRequestBody(requestBody: OpenApiSpec.RequestBodyObject) {
		const [mediaType] = Object.keys(requestBody.content);

		const mediaTypeObj = requestBody.content[mediaType];

		assert(mediaTypeObj.schema);

		let { schema } = mediaTypeObj;

		if (schema.allOf) schema = this.mergeSchemas(schema.allOf);

		const params: ExtractParam[] = [];

		for (let [key, value] of Object.entries(schema.properties ?? {})) {
			if (value.allOf) value = this.mergeSchemas(value.allOf);

			const specParam = this.rbPropertyToSpecParam(key, value, schema.required);

			if (value.type === "array") {
				specParam.schema ??= {};
				specParam.schema.items = value.items;
			}

			const param = this.extractParam(specParam);
			if (param) params.push(param);
		}

		if (mediaType === "text/plain") {
			params.push(this.implicitParamFromTextPlain(requestBody));
		}

		return { params, mediaType };
	}

	private implicitParamFromTextPlain(
		requestBody: OpenApiSpec.RequestBodyObject,
	) {
		const [mediaType] = Object.keys(requestBody.content);

		const mediaTypeObj = requestBody.content[mediaType];

		assert(mediaTypeObj);

		const param: StringParam = {
			name: "text",
			location: "body",
			required: true,
			type: "string",
			default: "",
		};

		const { description } = requestBody;

		if (description) param.description = truncate(description);

		const { example } = mediaTypeObj;

		if (example) param.placeholder = `e.g. ${example}`;

		return param;
	}

	private mergeSchemas(schemas: OpenApiSpec.SchemaObject[]) {
		const result: OpenApiSpec.ParameterBaseObject["schema"] = {
			type: undefined,
			properties: {},
			required: [],
		};

		for (const schema of schemas) {
			if (schema.properties) {
				// @ts-expect-error Likely because of `schema.items` added by parser @TODO
				result.properties = { ...result.properties, ...schema.properties };
			}

			if (schema.required) result.required?.push(...schema.required);

			for (const [key, value] of Object.entries(schema)) {
				if (key === "properties" || key === "required") continue;
				result[key as keyof typeof result] = value;
			}
		}

		return result;
	}

	private rbPropertyToSpecParam(
		key: string,
		value: OpenApiSpec.SchemaObject,
		requiredProperties: string[] = [],
	): OpenApiSpec.ParameterObject {
		if (value.anyOf) value = { ...value, ...value.anyOf[0] };
		if (value.oneOf) value = { ...value, ...value.oneOf[0] };

		return {
			name: key,
			description: truncate(value.description),
			in: "body",
			required: requiredProperties.includes(key),
			example: value.example,
			schema: {
				// @ts-ignore @TODO: Type this properly
				type: value.type as
					| OpenApiSpec.NonArraySchemaObjectType
					| OpenApiSpec.ArraySchemaObjectType,
			},
		};
	}

	private checkLocation(candidate: string): asserts candidate is ParamLocation {
		if (!["path", "query", "body"].includes(candidate)) {
			throw new Error("Invalid location");
		}
	}

	extractParam(specParam: OpenApiSpec.ParameterObject): ExtractParam | null {
		const {
			name,
			in: location,
			required,
			description,
			example,
			schema,
		} = specParam;

		this.checkLocation(location);

		const baseProps: ParamBaseProps = {
			name,
			location,
			required: required ?? false,
			description: truncate(description),
		};

		assert(schema);
		const { type } = schema;

		if (
			type === "string" &&
			Array.isArray(schema.enum) &&
			schema.enum.length > 0
		) {
			return {
				...baseProps,
				type: "options",
				default: schema.default ?? schema.enum[0],
				options: schema.enum,
			};
		}

		if (type === "string") {
			const param: StringParam = {
				...baseProps,
				type: "string",
				default: schema.default ?? "",
			};

			if (example) {
				param.placeholder = `e.g. ${typeof example === "string" ? example : JSON.stringify(example)}`;
			}

			return param;
		}

		if (type === "number" || type === "integer") {
			return { ...baseProps, type: "number", default: schema.default ?? 0 };
		}

		if (type === "boolean") {
			return {
				...baseProps,
				type: "boolean",
				default: schema.default ?? false,
			};
		}

		if (type === "array" && schema.items?.type === "string") {
			return {
				...baseProps,
				type: "string", // comma-separated list on n8n side
				default: schema.default ?? "",
			};
		}

		if (type === "array" || type === "object") {
			return {
				...baseProps,
				type: "json",
				default: schema.default ?? "{}",
			};
		}

		this.skipParam(specParam, "unsupported-param-type");

		return null;
	}

	// ----------------------------------
	//            skipping
	// ----------------------------------

	private readonly skipped: {
		params: Array<{ opId: string; param: string; reason: string }>;
	} = { params: [] };

	private skipParam(
		{ opId, name: param }: OpenApiSpec.ParameterObject,
		reason: ParamSkipReason,
	) {
		this.skipped.params.push({ opId, param, reason });
	}

	printSkipped() {
		if (process.env.NODE_ENV === "test") return;

		const { params } = this.skipped;

		if (params.length === 0) return;

		if (params.length > 0) {
			console.warn("Skipped parameters:");

			const byReason = params.reduce<Record<string, string[]>>(
				(acc, { opId, param, reason }) => {
					acc[reason] ??= [];
					acc[reason].push(`${opId}.${param}`);
					return acc;
				},
				{},
			);

			for (const [reason, params] of Object.entries(byReason)) {
				console.warn(`- ${reason}: ${params.join(", ")}`);
			}
		}
	}

	resetSkipped() {
		this.skipped.params = [];
	}
}
