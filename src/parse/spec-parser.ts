import fs from "node:fs/promises";
import assert from "node:assert";
import path from "node:path";
import { ParamExtractor } from "~/parse/param-extractor";
import { camelCase, pascalCase, truncate } from "~/casing";
import pluralize from "pluralize";
import type { PossiblyRefNode } from "~/types";
import type { Extract, Auth } from "~/types";
import type { OpenApiSpec } from "~/types";

export class SpecParser {
	constructor(private readonly paramExtractor = new ParamExtractor()) {}

	async parse(specPath: string) {
		const refSpec = await this.load(specPath);
		const derefSpec = this.removeRefs(refSpec);

		return this.extract(derefSpec);
	}

	async load(specPath: string) {
		const fileContent = await fs.readFile(specPath, { encoding: "utf8" });

		const { ext } = path.parse(specPath);

		if (ext !== ".json") throw new Error("Expected JSON file");

		return JSON.parse(fileContent) as OpenApiSpec.Document;
	}

	/** Replace all `$ref` pointers in a schema with their referenced values. */
	removeRefs(schema: OpenApiSpec.Document) {
		const visited = new Set<unknown>();
		const clone = structuredClone(schema);

		const visit = (node: unknown, path: string) => {
			if (node === null || typeof node !== "object" || visited.has(node)) {
				return node;
			}

			visited.add(node);

			if (Array.isArray(node)) {
				for (const [index, item] of node.entries()) {
					node[index] = visit(item, `${path}/${index}`);
				}

				return node;
			}

			const objNode = node as Record<string, unknown>;

			if (objNode.$ref && typeof objNode.$ref === "string") {
				let ref: PossiblyRefNode = objNode as PossiblyRefNode;

				do {
					const refString = ref.$ref as string;
					ref = this.resolveRef(clone, refString) as PossiblyRefNode;
				} while (ref.$ref && typeof ref.$ref === "string");
				return ref;
			}

			for (const key in objNode) {
				objNode[key] = visit(objNode[key], `${path}/${key}`);
			}

			return node;
		};

		return visit(clone, "#") as OpenApiSpec.Document;
	}

	/** Resolve a `$ref` pointer in a schema, returning the referenced value. */
	private resolveRef(refNode: PossiblyRefNode, ref: string) {
		const cache = new Map<string, unknown>(); // ref path to value

		if (cache.has(ref)) return cache.get(ref);

		const path = ref.split("/").slice(1);

		let node: unknown = refNode;

		for (const segment of path) {
			if (!node || typeof node !== "object") {
				node = null; // dead end
				break;
			}

			const objNode = node as Record<string, unknown>;
			node = objNode[segment] ?? null;
		}

		cache.set(ref, node);

		return node;
	}

	extract(spec: OpenApiSpec.Document): Extract {
		const { resources, operations } = this.extractResourcesOperations(spec);

		const extract: Extract = {
			descriptors: { ...this.extractDescriptors(spec), resources },
			operations,
		};

		this.paramExtractor.printSkipped();
		this.paramExtractor.resetSkipped();

		return extract;
	}

	private extractDescriptors(spec: OpenApiSpec.Document) {
		assert(Array.isArray(spec.servers) && spec.servers.length === 1);

		const name = spec.info.title.replace(/ API$/, "");
		const auth = this.extractAuth(spec, name);

		return {
			name,
			description: truncate(spec.info.description),
			baseUrl: spec.servers[0].url,
			specVersion: spec.info.version,
			openApiVersion: spec.openapi,
			nodeTypeClassName: pascalCase(name),
			auth,
			docsUrl:
				spec.externalDocs?.url ??
				"https://docs.n8n.io/integrations/creating-nodes/",
		};
	}

	private extractAuth(spec: OpenApiSpec.Document, apiName: string): Auth[] {
		const securitySchemes = spec.components?.securitySchemes;

		if (!securitySchemes) return [];

		const auth: Auth[] = [];

		for (const ss of Object.values(securitySchemes)) {
			if (ss.type === "http" && ss.scheme === "bearer") {
				auth.push({
					type: "http:bearer",
					credTypeClassName: pascalCase(apiName) + "Api",
				});
				continue;
			}

			if (ss.type === "apiKey" && ss.in === "header") {
				auth.push({
					type: "api-key:header",
					headerName: ss.name,
					credTypeClassName: pascalCase(apiName) + "Api",
				});
				continue;
			}

			if (ss.type === "apiKey" && ss.in === "query") {
				auth.push({
					type: "api-key:query",
					qsKey: ss.name,
					credTypeClassName: pascalCase(apiName) + "Api",
				});
				continue;
			}

			if (ss.type === "oauth2" && ss.flows.authorizationCode) {
				const { authorizationUrl, tokenUrl, scopes } =
					ss.flows.authorizationCode;
				auth.push({
					type: "oauth2:authorization-code",
					authorizationUrl,
					tokenUrl,
					scopes: Object.keys(scopes),
					credTypeClassName: pascalCase(apiName) + "OAuth2Api",
				});
				continue;
			}

			throw new Error(`Unsupported security scheme: ${JSON.stringify(ss)}`);
		}

		return auth;
	}

	private extractResourcesOperations({ paths }: OpenApiSpec.Document): {
		resources: string[];
		operations: Extract["operations"];
	} {
		assert(paths);

		const resources = new Set<string>();
		const extractOps: Extract["operations"] = {};

		for (const [endpoint, specOperations] of Object.entries(paths)) {
			assert(specOperations);

			const crossOpParams = specOperations.parameters ?? []; // params that apply across operations
			const baseUrlOverride = specOperations.servers?.[0].url; // op-level URL overriding spec-level URL

			for (const [method, specOp] of Object.entries(specOperations)) {
				if (method === "parameters" || method === "servers") continue;

				assert(typeof specOp === "object" && !Array.isArray(specOp));

				specOp.operationId ??= this.inferOperationId(method, endpoint);

				const methodPlusEndpoint = method.toUpperCase() + " " + endpoint;
				specOp.description ??= specOp.summary ?? methodPlusEndpoint;

				const displayName = truncate(specOp.summary ?? specOp.description);

				const { operationId: opId } = specOp;
				const tags = specOp.tags?.map((tag) => pluralize(tag, 1)) ?? [
					"miscellaneous",
				];

				extractOps[opId] = {
					displayName,
					description: truncate(specOp.description),
					method,
					endpoint,
					tags,
					params: [],
				};

				tags.forEach((tag) => resources.add(tag));

				if (baseUrlOverride) extractOps[opId].baseUrl = baseUrlOverride;

				if (crossOpParams.length > 0) {
					extractOps[opId].params.push(
						...this.paramExtractor.fromSpecParams(crossOpParams),
					);
				}

				const parameters = specOp.parameters?.map((p) => {
					p.opId = opId;
					return p;
				});

				if (parameters) {
					extractOps[opId].params.push(
						...this.paramExtractor.fromSpecParams(parameters),
					);
				}

				const { requestBody } = specOp;

				if (requestBody) {
					requestBody.opId = opId;
					const { params, mediaType } =
						this.paramExtractor.fromSpecRequestBody(requestBody);

					extractOps[opId].params.push(...params);

					if (mediaType !== "application/json") {
						extractOps[opId].headers ??= {};
						extractOps[opId].headers["Content-Type"] = mediaType;
					}
				}
			}
		}

		return { operations: extractOps, resources: Array.from(resources) };
	}

	private inferOperationId(rawMethod: string, rawEndpoint: string) {
		const method = rawMethod.toLowerCase();
		const endpoint = rawEndpoint.toLowerCase().replace(/^\/|\/$/g, "");

		return camelCase(method + " " + endpoint);
	}
}
