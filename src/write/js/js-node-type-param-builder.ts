import * as recast from "recast";
import assert from "node:assert";
import { camelCase, capitalCase } from "~/casing";
import type {
	Extract,
	ExtractParam,
	Operation,
	OperationOption,
	OperationParameterContext,
	OptionalAttribute,
} from "~/types";

const b = recast.types.builders;

export class JsNodeTypeParamBuilder {
	nodeTypeParams(extract: Extract) {
		const nodeTypeParams = [];

		if (extract.descriptors.auth.length > 1) {
			nodeTypeParams.push(this.authSelector(extract));
		}

		const mustGroupByResource = extract.descriptors.resources.length > 1;

		if (mustGroupByResource) {
			nodeTypeParams.push(this.resourceSelector(extract));
		}

		nodeTypeParams.push(...this.operationSelectors(extract));

		for (const [opId, operation] of Object.entries(extract.operations)) {
			const optionalAttributes: OptionalAttribute[] = [];

			for (const param of operation.params) {
				const context: OperationParameterContext = {
					opId,
					resources: operation.tags,
					mustGroupByResource,
				};

				if (param.required) {
					nodeTypeParams.push(this.operationAttribute(param, context));
					continue;
				}

				optionalAttributes.push({ param, context });
			}

			if (optionalAttributes.length > 0) {
				nodeTypeParams.push(this.additionalOptions(optionalAttributes));
			}
		}

		return nodeTypeParams;
	}

	private authSelector(extract: Extract) {
		assert(extract.descriptors.auth.length > 1);

		const authOptions = extract.descriptors.auth.map((auth) => {
			return b.objectExpression([
				b.property(
					"init",
					b.identifier("name"),
					b.literal(capitalCase(auth.credTypeClassName)),
				),
				b.property(
					"init",
					b.identifier("value"),
					b.literal(camelCase(auth.credTypeClassName)),
				),
			]);
		});

		return b.objectExpression([
			b.property(
				"init",
				b.identifier("displayName"),
				b.literal("Authentication"),
			),
			b.property("init", b.identifier("name"), b.literal("authentication")),
			b.property("init", b.identifier("type"), b.literal("options")),
			b.property(
				"init",
				b.identifier("options"),
				b.arrayExpression(authOptions),
			),
			b.property(
				"init",
				b.identifier("default"),
				b.literal(camelCase(extract.descriptors.auth[0].credTypeClassName)),
			),
		]);
	}

	private resourceSelector(extract: Extract) {
		assert(extract.descriptors.resources.length > 1);

		const { resources } = extract.descriptors;

		const resourceOptions = resources.map((resource) => {
			return {
				name: capitalCase(resource),
				value: camelCase(resource),
			};
		});

		return b.objectExpression([
			b.property("init", b.identifier("displayName"), b.literal("Resource")),
			b.property("init", b.identifier("name"), b.literal("resource")),
			b.property("init", b.identifier("type"), b.literal("options")),
			b.property("init", b.identifier("noDataExpression"), b.literal(true)),
			b.property(
				"init",
				b.identifier("default"),
				b.literal(camelCase(resources[0])),
			),
			b.property(
				"init",
				b.identifier("options"),
				b.arrayExpression(
					resourceOptions.map((option) =>
						b.objectExpression([
							b.property("init", b.identifier("name"), b.literal(option.name)),
							b.property(
								"init",
								b.identifier("value"),
								b.literal(option.value),
							),
						]),
					),
				),
			),
		]);
	}

	private operationSelectors(extract: Extract) {
		const operationSelectorBaseProps = [
			b.property("init", b.identifier("displayName"), b.literal("Operation")),
			b.property("init", b.identifier("name"), b.literal("operation")),
			b.property("init", b.identifier("type"), b.literal("options")),
			b.property("init", b.identifier("noDataExpression"), b.literal(true)),
		];

		// when no resources to group by, only one global operation selector

		if (extract.descriptors.resources.length === 1) {
			const operationOptions = this.toOperationOptions(
				Object.entries(extract.operations),
			);

			return [
				b.objectExpression([
					...operationSelectorBaseProps,
					b.property(
						"init",
						b.identifier("default"),
						b.literal(Object.keys(extract.operations)[0]),
					),
					b.property(
						"init",
						b.identifier("options"),
						b.arrayExpression(operationOptions),
					),
				]),
			];
		}

		// for multiple resources, one operation selector per resource

		const operationsByResource = this.groupOperationsByResource(extract);

		const operationSelectors = [];

		for (const [resource, operations] of Object.entries(operationsByResource)) {
			if (operations.length === 0) continue;

			const operationOptions = this.toOperationOptions(operations);

			operationSelectors.push(
				b.objectExpression([
					...operationSelectorBaseProps,
					b.property(
						"init",
						b.identifier("default"),
						b.literal(operations[0][0]),
					),
					b.property(
						"init",
						b.identifier("options"),
						b.arrayExpression(operationOptions),
					),
					b.property(
						"init",
						b.identifier("displayOptions"),
						b.objectExpression([
							b.property(
								"init",
								b.identifier("show"),
								b.objectExpression([
									b.property(
										"init",
										b.identifier("resource"),
										b.arrayExpression([b.literal(camelCase(resource))]),
									),
								]),
							),
						]),
					),
				]),
			);
		}

		return operationSelectors;
	}

	private operationAttribute(
		param: ExtractParam,
		context: OperationParameterContext,
	) {
		const paramProps = [
			b.property(
				"init",
				b.identifier("displayName"),
				b.literal(capitalCase(param.name)),
			),
			b.property("init", b.identifier("name"), b.literal(param.name)),
			b.property("init", b.identifier("type"), b.literal(param.type)),
			b.property("init", b.identifier("default"), b.literal(param.default)),
		];

		if (param.required) {
			paramProps.push(
				b.property("init", b.identifier("required"), b.literal(true)),
			);
		}

		if (param.description) {
			paramProps.push(
				b.property(
					"init",
					b.identifier("description"),
					b.literal(param.description),
				),
			);
		}

		if (param.placeholder) {
			paramProps.push(
				b.property(
					"init",
					b.identifier("placeholder"),
					b.literal(param.placeholder),
				),
			);
		}

		if (param.type === "options") {
			paramProps.push(
				b.property(
					"init",
					b.identifier("options"),
					b.arrayExpression(
						param.options.map((option) =>
							b.objectExpression([
								b.property(
									"init",
									b.identifier("name"),
									b.literal(capitalCase(option)),
								),
								b.property("init", b.identifier("value"), b.literal(option)),
							]),
						),
					),
				),
			);
		}

		if (param.location === "query" || param.location === "body") {
			paramProps.push(
				b.property(
					"init",
					b.identifier("routing"),
					b.objectExpression([
						b.property(
							"init",
							b.identifier("send"),
							b.objectExpression([
								b.property(
									"init",
									b.identifier("type"),
									b.literal(param.location),
								),
								b.property(
									"init",
									b.identifier("property"),
									b.literal(param.name),
								),
							]),
						),
					]),
				),
			);
		}

		const showProperties = [];
		const { opId, resources, mustGroupByResource } = context;

		if (mustGroupByResource) {
			showProperties.push(
				b.property(
					"init",
					b.identifier("resource"),
					b.arrayExpression(resources.map((r) => b.literal(camelCase(r)))),
				),
			);
		}

		showProperties.push(
			b.property(
				"init",
				b.identifier("operation"),
				b.arrayExpression([b.literal(opId)]),
			),
		);

		paramProps.push(
			b.property(
				"init",
				b.identifier("displayOptions"),
				b.objectExpression([
					b.property(
						"init",
						b.identifier("show"),
						b.objectExpression(showProperties),
					),
				]),
			),
		);

		return b.objectExpression(paramProps);
	}

	private additionalOptions(optionalAttributes: OptionalAttribute[]) {
		const options = [];

		for (const { param, context } of optionalAttributes) {
			const attribute = this.operationAttribute(param, context);

			/**
			 * Since this attribute is optional, `displayOptions` are located
			 * at the `collection` level, so remove `displayOptions`.
			 */
			const props = attribute.properties.filter(
				(p) =>
					p.type === "Property" &&
					p.key.type === "Identifier" &&
					p.key.name !== "displayOptions",
			);

			options.push(b.objectExpression(props));
		}

		const showProperties = [];

		// all optional attributes in the arg belong to the same operation
		const { opId, resources, mustGroupByResource } =
			optionalAttributes[0].context;

		if (mustGroupByResource) {
			showProperties.push(
				b.property(
					"init",
					b.identifier("resource"),
					b.arrayExpression(resources.map((r) => b.literal(camelCase(r)))),
				),
			);
		}

		showProperties.push(
			b.property(
				"init",
				b.identifier("operation"),
				b.arrayExpression([b.literal(opId)]),
			),
		);

		return b.objectExpression([
			b.property(
				"init",
				b.identifier("displayName"),
				b.literal("Additional Options"),
			),
			b.property("init", b.identifier("name"), b.literal("additionalOptions")),
			b.property("init", b.identifier("type"), b.literal("collection")),
			b.property("init", b.identifier("placeholder"), b.literal("Add Option")),
			b.property(
				"init",
				b.identifier("displayOptions"),
				b.objectExpression([
					b.property(
						"init",
						b.identifier("show"),
						b.objectExpression(showProperties),
					),
				]),
			),
			b.property("init", b.identifier("default"), b.objectExpression([])),
			b.property("init", b.identifier("options"), b.arrayExpression(options)),
		]);
	}

	private toOperationOptions(args: [string, Operation][]) {
		const options: OperationOption[] = args.map(([opId, op]) => {
			const pathParam = op.params.find((p) => p.location === "path");

			const url = pathParam
				? `=${op.endpoint.replace(`{${pathParam.name}}`, `{{ $parameter["${pathParam.name}"] }}`)}`
				: op.endpoint;

			return {
				name: op.displayName,
				value: opId,
				description: op.description,
				action: op.description,
				tags: op.tags,
				routing: {
					request: {
						method: op.method.toUpperCase(),
						url,
						baseUrl: op.baseUrl,
						headers: op.headers,
					},
				},
			};
		});

		return options.map((op) => {
			const requestProps = [
				b.property(
					"init",
					b.identifier("method"),
					b.literal(op.routing.request.method),
				),
				b.property(
					"init",
					b.identifier("url"),
					b.literal(op.routing.request.url),
				),
			];

			if (op.routing.request.baseUrl) {
				requestProps.push(
					b.property(
						"init",
						b.identifier("baseURL"),
						b.literal(op.routing.request.baseUrl),
					),
				);
			}

			if (op.routing.request.headers) {
				requestProps.push(
					b.property(
						"init",
						b.identifier("headers"),
						b.objectExpression(
							Object.entries(op.routing.request.headers).map(([key, value]) =>
								b.property("init", b.identifier(`'${key}'`), b.literal(value)),
							),
						),
					),
				);
			}

			const optionProps = [
				b.property("init", b.identifier("name"), b.literal(op.name)),
				b.property("init", b.identifier("value"), b.literal(op.value)),
				b.property("init", b.identifier("action"), b.literal(op.action)),
				b.property(
					"init",
					b.identifier("routing"),
					b.objectExpression([
						b.property(
							"init",
							b.identifier("request"),
							b.objectExpression(requestProps),
						),
					]),
				),
			];

			return b.objectExpression(optionProps);
		});
	}

	private groupOperationsByResource(extract: Extract) {
		type Resource = string;
		type OperationId = string;
		type OperationsByResource = Record<
			Resource,
			Array<[OperationId, Operation]>
		>;

		return Object.entries(extract.operations).reduce<OperationsByResource>(
			(acc, [opId, op]) => {
				op.tags.forEach((tag) => {
					acc[tag] ??= [];
					acc[tag].push([opId, op]);
				});
				return acc;
			},
			{},
		);
	}
}
