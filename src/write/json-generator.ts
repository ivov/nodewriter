import { camelCase, capitalCase, pascalCase } from "~/casing";
import type { Extract, GeneratorConfig, Auth, Operation } from "~/types";

export class JsonGenerator {
	constructor(private readonly config: GeneratorConfig = { pretty: true }) {}

	async run(extract: Extract, customServiceName?: string) {
		if (customServiceName) this.customizeClassNames(extract, customServiceName);

		const [nodeType, credTypes] = await Promise.all([
			this.generateNodeType(extract),
			this.generateCredTypes(extract),
		]);

		return { nodeType, credTypes };
	}

	private customizeClassNames(extract: Extract, customServiceName: string) {
		// @TODO: Support 2+ non-OAuth2 security schemes, currently both produce same cred type class name

		const pascalCased = pascalCase(customServiceName);
		if (pascalCased !== customServiceName) {
			throw new Error(
				`Custom service name must be in PascalCase, e.g. ${pascalCased}`,
			);
		}

		extract.descriptors.nodeTypeClassName = customServiceName;

		const customCredTypeClassNames = extract.descriptors.auth.map((a) => {
			return a.type === "oauth2:authorization-code"
				? `${customServiceName}OAuth2Api`
				: `${customServiceName}Api`;
		});

		for (let i = 0; i < customCredTypeClassNames.length; i++) {
			extract.descriptors.auth[i].credTypeClassName =
				customCredTypeClassNames[i];
		}
	}

	private async generateCredTypes(extract: Extract) {
		const { auth } = extract.descriptors;

		if (auth.length === 0) return [];

		const credTypes = [];

		for (const a of auth) {
			const obj = this.generateCredType(a, extract.descriptors.docsUrl);

			let source = JSON.stringify(obj);

			if (this.config.pretty) {
				const { Formatter } = await import("~/write/formatter");
				source = await new Formatter().format(source, "json");
			}

			credTypes.push({
				fileName: `${a.credTypeClassName}.credentials.json`,
				source,
			});
		}

		return credTypes;
	}

	private generateCredType(auth: Auth, docsUrl: string) {
		const { credTypeClassName: className, type: authType } = auth;
		const internalName = camelCase(className);
		const displayName = capitalCase(className).replace("O Auth", "OAuth");

		const obj: Record<string, unknown> = {
			name: internalName,
			displayName,
			documentationUrl: docsUrl,
		};

		if (authType === "oauth2:authorization-code") {
			obj.extends = ["oAuth2Api"];
		}

		obj.properties = this.credTypeParams(auth);

		if (
			authType === "api-key:header" ||
			authType === "api-key:query" ||
			authType === "http:bearer"
		) {
			const authValue =
				authType === "http:bearer"
					? "Bearer {{ $credentials.token }}"
					: "={{ $credentials.apiKey }}";

			const authKey =
				authType === "http:bearer"
					? "Authorization"
					: authType === "api-key:query"
						? auth.qsKey
						: auth.headerName;

			const propertyKey =
				authType === "http:bearer" || authType === "api-key:header"
					? "headers"
					: "qs";

			obj.authenticate = {
				type: "generic",
				properties: {
					[propertyKey]: {
						[authKey]: authValue,
					},
				},
			};
		}

		return obj;
	}

	private credTypeParams(auth: Auth) {
		if (auth.type === "oauth2:authorization-code") {
			return [
				{
					displayName: "Grant Type",
					name: "grantType",
					type: "hidden",
					default: "authorizationCode",
				},
				{
					displayName: "Authorization URL",
					name: "authUrl",
					type: "hidden",
					default: auth.authorizationUrl,
					required: true,
				},
				{
					displayName: "Access Token URL",
					name: "accessTokenUrl",
					type: "hidden",
					default: auth.tokenUrl,
					required: true,
				},
				{
					displayName: "Scope",
					name: "scope",
					type: "hidden",
					default: auth.scopes.length === 0 ? "" : auth.scopes.join(" "),
				},
			];
		}

		const displayName =
			auth.type === "http:bearer" ? "Bearer Token" : "API Key";
		const internalName = auth.type === "http:bearer" ? "token" : "apiKey";

		return [
			{
				displayName,
				name: internalName,
				type: "string",
				typeOptions: {
					password: true,
				},
				required: true,
				default: "",
			},
		];
	}

	private async generateNodeType(extract: Extract) {
		const { nodeTypeClassName, description, baseUrl, auth } =
			extract.descriptors;

		const internalName = camelCase(nodeTypeClassName);
		const displayName = capitalCase(nodeTypeClassName);

		const obj: Record<string, unknown> = {
			displayName,
			name: internalName,
			description,
			version: 1,
			group: ["transform"],
			subtitle: '={{ $parameter["operation"] }}',
			defaults: {
				name: displayName,
			},
			inputs: ["main"],
			outputs: ["main"],
			requestDefaults: {
				baseURL: baseUrl,
				headers: {
					"Content-Type": "application/json",
				},
				returnFullResponse: true,
			},
		};

		if (auth.length > 0) {
			obj.credentials = auth.map((auth) => {
				const credential: Record<string, unknown> = {
					name: camelCase(auth.credTypeClassName),
					required: true,
				};

				if (extract.descriptors.auth.length > 1) {
					credential.displayOptions = {
						show: {
							authentication: [camelCase(auth.credTypeClassName)],
						},
					};
				}

				return credential;
			});
		}

		obj.properties = this.nodeTypeParams(extract);

		let source = JSON.stringify(obj);

		if (this.config.pretty) {
			const { Formatter } = await import("~/write/formatter");
			source = await new Formatter().format(source, "json");
		}

		return {
			fileName: `${nodeTypeClassName}.node.json`,
			source,
		};
	}

	private nodeTypeParams(extract: Extract) {
		const params = [];
		const { resources, auth } = extract.descriptors;
		const mustGroupByResource = resources.length > 1;

		if (auth.length > 1) {
			params.push({
				displayName: "Authentication",
				name: "authentication",
				type: "options",
				options: auth.map((auth) => ({
					name: capitalCase(auth.credTypeClassName),
					value: camelCase(auth.credTypeClassName),
				})),
				default: camelCase(auth[0].credTypeClassName),
			});
		}

		if (mustGroupByResource) {
			params.push({
				displayName: "Resource",
				name: "resource",
				type: "options",
				noDataExpression: true,
				options: resources.map((resource) => ({
					name: capitalCase(resource),
					value: camelCase(resource),
				})),
				default: camelCase(resources[0]),
			});
		}

		if (resources.length === 1) {
			const operationOptions = Object.entries(extract.operations).map(
				([opId, op]) => this.toOperationOption(opId, op),
			);

			params.push({
				displayName: "Operation",
				name: "operation",
				type: "options",
				noDataExpression: true,
				default: Object.keys(extract.operations)[0],
				options: operationOptions,
			});
		} else {
			const operationsByResource = this.groupOperationsByResource(extract);

			for (const [resource, operations] of Object.entries(
				operationsByResource,
			)) {
				if (operations.length === 0) continue;

				const operationOptions = operations.map(([opId, op]) =>
					this.toOperationOption(opId, op),
				);

				params.push({
					displayName: "Operation",
					name: "operation",
					type: "options",
					noDataExpression: true,
					default: operations[0][0],
					options: operationOptions,
					displayOptions: {
						show: {
							resource: [camelCase(resource)],
						},
					},
				});
			}
		}

		for (const [opId, operation] of Object.entries(extract.operations)) {
			const requiredParams = [];
			const optionalParams = [];

			for (const param of operation.params) {
				const paramObj = this.operationAttribute(param, {
					opId,
					resources: operation.tags,
					mustGroupByResource,
				});

				param.required
					? requiredParams.push(paramObj)
					: optionalParams.push(paramObj);
			}

			params.push(...requiredParams);

			if (optionalParams.length > 0) {
				const showProps: Record<string, unknown> = {
					operation: [opId],
				};

				if (mustGroupByResource) {
					showProps.resource = operation.tags.map((r) => camelCase(r));
				}

				params.push({
					displayName: "Additional Options",
					name: "additionalOptions",
					type: "collection",
					placeholder: "Add Option",
					default: {},
					options: optionalParams,
					displayOptions: {
						show: showProps,
					},
				});
			}
		}

		return params;
	}

	private toOperationOption(opId: string, op: Operation) {
		const pathParam = op.params.find((p) => p.location === "path");

		const url = pathParam
			? `=${op.endpoint.replace(`{${pathParam.name}}`, `{{ $parameter["${pathParam.name}"] }}`)}`
			: op.endpoint;

		const option: any = {
			name: op.displayName,
			value: opId,
			action: op.description,
			routing: {
				request: {
					method: op.method.toUpperCase(),
					url,
				},
			},
		};

		if (op.baseUrl) {
			option.routing.request.baseURL = op.baseUrl;
		}

		if (op.headers) {
			option.routing.request.headers = op.headers;
		}

		return option;
	}

	private operationAttribute(param: any, context: any) {
		const obj: Record<string, unknown> = {
			name: param.name,
			displayName: capitalCase(param.name),
			type: param.type,
			default: param.default,
		};

		if (param.required) {
			obj.required = true;
		}

		if (param.description) {
			obj.description = param.description;
		}

		if (param.placeholder) {
			obj.placeholder = param.placeholder;
		}

		if (param.type === "options" && param.options) {
			obj.options = param.options.map((option: string) => ({
				name: capitalCase(option),
				value: option,
			}));
		}

		if (param.location === "query" || param.location === "body") {
			obj.routing = {
				send: {
					type: param.location,
					property: param.name,
				},
			};
		}

		if (param.required) {
			const showProps: Record<string, unknown> = {
				operation: [context.opId],
			};

			if (context.mustGroupByResource) {
				showProps.resource = context.resources.map((resource: string) =>
					camelCase(resource),
				);
			}

			obj.displayOptions = {
				show: showProps,
			};
		}

		return obj;
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
				op.tags.forEach((tag: string) => {
					acc[tag] ??= [];
					acc[tag].push([opId, op]);
				});
				return acc;
			},
			{},
		);
	}
}
