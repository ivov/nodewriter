import type * as recast from "recast";

// ----------------------------------
//           generator
// ----------------------------------

export type GeneratorConfig = { pretty: boolean };

export type AstNode = recast.types.ASTNode;
export type FileAst = recast.types.namedTypes.File;
export type Property = recast.types.namedTypes.Property;

// ----------------------------------
//            extract
// ----------------------------------

export type Extract = {
	descriptors: Descriptors;
	operations: Operations;
};

export type Descriptors = DescriptorBaseProps;

type DescriptorBaseProps = {
	name: string;
	description: string;
	baseUrl: string;
	specVersion: string;
	openApiVersion: string;
	auth: Auth[];
	nodeTypeClassName: string;
	resources: string[];
	docsUrl: string;
};

export type Auth = AuthMechanism & {
	credTypeClassName: string;
};

export type AuthMechanism =
	| HttpBearerAuth
	| ApiKeyHeaderAuth
	| ApiKeyQueryAuth
	| OAuth2AuthCodeAuth;

type HttpBearerAuth = { type: "http:bearer" };
type ApiKeyHeaderAuth = { type: "api-key:header"; headerName: string };
type ApiKeyQueryAuth = { type: "api-key:query"; qsKey: string };

export type SimpleAuth = ApiKeyHeaderAuth | ApiKeyQueryAuth | HttpBearerAuth;

export type OAuth2AuthCodeAuth = {
	type: "oauth2:authorization-code";
	authorizationUrl: string;
	tokenUrl: string;
	scopes: string[];
};

// ----------------------------------
//           operations
// ----------------------------------

export type Operations = {
	[operationId: string]: Operation;
};

export type Operation = {
	displayName: string;
	description: string;
	method: string;
	endpoint: string;
	tags: string[];
	params: ExtractParam[];

	/** Operation-specific base URL that overrides the spec-wide base URL. */
	baseUrl?: string;

	/** Operation-specific headers that override the spec-wide headers. */
	headers?: Record<string, string>;
};

export type OperationParameterContext = {
	opId: string;
	resources: string[];
	mustGroupByResource: boolean;
};

export type OptionalAttribute = {
	param: ExtractParam;
	context: OperationParameterContext;
};

export type ExtractParam =
	| StringParam
	| NumberParam
	| BooleanParam
	| OptionsParam
	| JsonParam;

export type ParamBaseProps = {
	name: string;
	description?: string;
	location: ParamLocation;
	required: boolean;
	placeholder?: string;
};

export type StringParam = ParamBaseProps & {
	type: "string";
	default: string;
};

type NumberParam = ParamBaseProps & {
	type: "number";
	default: number;
};

type BooleanParam = ParamBaseProps & {
	type: "boolean";
	default: boolean;
};

type JsonParam = ParamBaseProps & {
	type: "json";
	default: string;
};

type OptionsParam = ParamBaseProps & {
	type: "options";
	default: string;
	options: string[];
};

export type ParamLocation = "path" | "query" | "body";

export type ParamSkipReason =
	| "missing-schema"
	| "missing-param-type"
	| "unsupported-param-type";

export type OperationOption = {
	name: string;
	value: string;
	action: string;
	description: string;
	tags: string[];
	routing: {
		request: {
			method: string;
			url: string;
			baseUrl?: string;
			headers?: Record<string, string>;
		};
	};
};

// ----------------------------------
//            OpenAPI
// ----------------------------------

/**
 * Modified from: https://github.com/kogosoftwarellc/open-api/blob/main/packages/openapi-types/index.ts
 */

/** OpenAPI v3.1 specification */
export declare namespace OpenApiSpec {
	type Modify<T, R> = Omit<T, keyof R> & R;
	type PathsWebhooksComponents<T extends {} = {}> = {
		paths: PathsObject<T>;
		webhooks: Record<string, PathItemObject>;
		components: ComponentsObject;
	};
	export type Document<T extends {} = {}> = Modify<
		Omit<OpenAPIV3.Document<T>, "paths" | "components">,
		{
			info: InfoObject;
			jsonSchemaDialect?: string;
			servers?: ServerObject[];
		} & (
			| (Pick<PathsWebhooksComponents<T>, "paths"> &
					Omit<Partial<PathsWebhooksComponents<T>>, "paths">)
			| (Pick<PathsWebhooksComponents<T>, "webhooks"> &
					Omit<Partial<PathsWebhooksComponents<T>>, "webhooks">)
			| (Pick<PathsWebhooksComponents<T>, "components"> &
					Omit<Partial<PathsWebhooksComponents<T>>, "components">)
		)
	>;
	export type InfoObject = Modify<
		OpenAPIV3.InfoObject,
		{
			summary?: string;
			license?: LicenseObject;
		}
	>;
	export type ContactObject = OpenAPIV3.ContactObject;
	export type LicenseObject = Modify<
		OpenAPIV3.LicenseObject,
		{
			identifier?: string;
		}
	>;
	export type ServerObject = Modify<
		OpenAPIV3.ServerObject,
		{
			url: string;
			description?: string;
			variables?: Record<string, ServerVariableObject>;
		}
	>;
	export type ServerVariableObject = Modify<
		OpenAPIV3.ServerVariableObject,
		{
			enum?: [string, ...string[]];
		}
	>;
	export type PathsObject<T extends {} = {}, P extends {} = {}> = Record<
		string,
		(PathItemObject<T> & P) | undefined
	>;
	export type HttpMethods = OpenAPIV3.HttpMethods;
	export type PathItemObject<T extends {} = {}> = Modify<
		OpenAPIV3.PathItemObject<T>,
		{
			servers?: ServerObject[];
			parameters?: ParameterObject[];
		}
	> & {
		[method in HttpMethods]?: OperationObject<T>;
	};
	export type OperationObject<T extends {} = {}> = Modify<
		OpenAPIV3.OperationObject<T>,
		{
			parameters?: ParameterObject[];
			requestBody?: RequestBodyObject;
			responses?: ResponsesObject;
			callbacks?: Record<string, CallbackObject>;
			servers?: ServerObject[];
		}
	> &
		T;
	export type ExternalDocumentationObject =
		OpenAPIV3.ExternalDocumentationObject;
	export type ParameterObject = OpenAPIV3.ParameterObject;
	export type HeaderObject = OpenAPIV3.HeaderObject;
	export type ParameterBaseObject = OpenAPIV3.ParameterBaseObject;
	export type NonArraySchemaObjectType =
		| OpenAPIV3.NonArraySchemaObjectType
		| "null";
	export type ArraySchemaObjectType = OpenAPIV3.ArraySchemaObjectType;
	/**
	 * There is no way to tell typescript to require items when type is either 'array' or array containing 'array' type
	 * 'items' will be always visible as optional
	 * Casting schema object to ArraySchemaObject or NonArraySchemaObject will work fine
	 */
	export type SchemaObject =
		| ArraySchemaObject
		| NonArraySchemaObject
		| MixedSchemaObject;
	export interface ArraySchemaObject extends BaseSchemaObject {
		type: ArraySchemaObjectType;
		items: SchemaObject;
	}
	export interface NonArraySchemaObject extends BaseSchemaObject {
		type?: NonArraySchemaObjectType;
	}
	interface MixedSchemaObject extends BaseSchemaObject {
		type?: (ArraySchemaObjectType | NonArraySchemaObjectType)[];
		items?: SchemaObject;
	}
	export type BaseSchemaObject = Modify<
		Omit<OpenAPIV3.BaseSchemaObject, "nullable">,
		{
			examples?: OpenAPIV3.BaseSchemaObject["example"][];
			exclusiveMinimum?: boolean | number;
			exclusiveMaximum?: boolean | number;
			contentMediaType?: string;
			$schema?: string;
			additionalProperties?: boolean | SchemaObject;
			properties?: {
				[name: string]: SchemaObject;
			};
			allOf?: SchemaObject[];
			oneOf?: SchemaObject[];
			anyOf?: SchemaObject[];
			not?: SchemaObject;
			discriminator?: DiscriminatorObject;
			externalDocs?: ExternalDocumentationObject;
			xml?: XMLObject;
			const?: any;
		}
	>;
	export type DiscriminatorObject = OpenAPIV3.DiscriminatorObject;
	export type XMLObject = OpenAPIV3.XMLObject;

	export type ExampleObject = OpenAPIV3.ExampleObject;
	export type MediaTypeObject = Modify<
		OpenAPIV3.MediaTypeObject,
		{
			schema?: SchemaObject;
			examples?: Record<string, ExampleObject>;
		}
	>;
	export type EncodingObject = OpenAPIV3.EncodingObject;
	export type RequestBodyObject = Modify<
		OpenAPIV3.RequestBodyObject,
		{
			content: {
				[media: string]: MediaTypeObject;
			};
		}
	>;
	export type ResponsesObject = Record<string, ResponseObject>;
	export type ResponseObject = Modify<
		OpenAPIV3.ResponseObject,
		{
			headers?: {
				[header: string]: HeaderObject;
			};
			content?: {
				[media: string]: MediaTypeObject;
			};
			links?: {
				[link: string]: LinkObject;
			};
		}
	>;
	export type LinkObject = Modify<
		OpenAPIV3.LinkObject,
		{
			server?: ServerObject;
		}
	>;
	export type CallbackObject = Record<string, PathItemObject>;
	export type SecurityRequirementObject = OpenAPIV3.SecurityRequirementObject;
	export type ComponentsObject = Modify<
		OpenAPIV3.ComponentsObject,
		{
			schemas?: Record<string, SchemaObject>;
			responses?: Record<string, ResponseObject>;
			parameters?: Record<string, ParameterObject>;
			examples?: Record<string, ExampleObject>;
			requestBodies?: Record<string, RequestBodyObject>;
			headers?: Record<string, HeaderObject>;
			securitySchemes?: Record<string, SecuritySchemeObject>;
			links?: Record<string, LinkObject>;
			callbacks?: Record<string, CallbackObject>;
			pathItems?: Record<string, PathItemObject>;
		}
	>;
	export type SecuritySchemeObject = OpenAPIV3.SecuritySchemeObject;
	export type HttpSecurityScheme = OpenAPIV3.HttpSecurityScheme;
	export type ApiKeySecurityScheme = OpenAPIV3.ApiKeySecurityScheme;
	export type OAuth2SecurityScheme = OpenAPIV3.OAuth2SecurityScheme;
	export type OpenIdSecurityScheme = OpenAPIV3.OpenIdSecurityScheme;
	export type TagObject = OpenAPIV3.TagObject;
	export {};
}
export declare namespace OpenAPIV3 {
	interface Document<T extends {} = {}> {
		openapi: string;
		info: InfoObject;
		servers?: ServerObject[];
		paths: PathsObject<T>;
		components?: ComponentsObject;
		security?: SecurityRequirementObject[];
		tags?: TagObject[];
		externalDocs?: ExternalDocumentationObject;
		"x-express-openapi-additional-middleware"?: (
			| ((request: any, response: any, next: any) => Promise<void>)
			| ((request: any, response: any, next: any) => void)
		)[];
		"x-express-openapi-validation-strict"?: boolean;
	}
	interface InfoObject {
		title: string;
		description?: string;
		termsOfService?: string;
		contact?: ContactObject;
		license?: LicenseObject;
		version: string;
	}
	interface ContactObject {
		name?: string;
		url?: string;
		email?: string;
	}
	interface LicenseObject {
		name: string;
		url?: string;
	}
	interface ServerObject {
		url: string;
		description?: string;
		variables?: {
			[variable: string]: ServerVariableObject;
		};
	}
	interface ServerVariableObject {
		enum?: string[];
		default: string;
		description?: string;
	}
	interface PathsObject<T extends {} = {}, P extends {} = {}> {
		[pattern: string]: (PathItemObject<T> & P) | undefined;
	}
	enum HttpMethods {
		GET = "get",
		PUT = "put",
		POST = "post",
		DELETE = "delete",
		OPTIONS = "options",
		HEAD = "head",
		PATCH = "patch",
		TRACE = "trace",
	}
	type PathItemObject<T extends {} = {}> = {
		$ref?: string;
		summary?: string;
		description?: string;
		servers?: ServerObject[];
		parameters?: ParameterObject[];
	} & {
		[method in HttpMethods]?: OperationObject<T>;
	};
	type OperationObject<T extends {} = {}> = {
		tags?: string[];
		summary?: string;
		description?: string;
		externalDocs?: ExternalDocumentationObject;
		operationId?: string;
		parameters?: ParameterObject[];
		requestBody?: RequestBodyObject;
		responses: ResponsesObject;
		callbacks?: {
			[callback: string]: CallbackObject;
		};
		deprecated?: boolean;
		security?: SecurityRequirementObject[];
		servers?: ServerObject[];
	} & T;
	interface ExternalDocumentationObject {
		description?: string;
		url: string;
	}
	interface ParameterObject extends ParameterBaseObject {
		name: string;
		in: string;
		opId: string; // added by parser
	}
	interface HeaderObject extends ParameterBaseObject {}
	interface ParameterBaseObject {
		description?: string;
		required?: boolean;
		deprecated?: boolean;
		allowEmptyValue?: boolean;
		style?: string;
		explode?: boolean;
		allowReserved?: boolean;
		schema?: SchemaObject & {
			items?: OpenApiSpec.SchemaObject; // added by parser, from request body
		};
		example?: any;
		examples?: {
			[media: string]: ExampleObject;
		};
		content?: {
			[media: string]: MediaTypeObject;
		};
	}
	type NonArraySchemaObjectType =
		| "boolean"
		| "object"
		| "number"
		| "string"
		| "integer";
	type ArraySchemaObjectType = "array";
	type SchemaObject = ArraySchemaObject | NonArraySchemaObject;
	interface ArraySchemaObject extends BaseSchemaObject {
		type: ArraySchemaObjectType;
		items: SchemaObject;
	}
	interface NonArraySchemaObject extends BaseSchemaObject {
		type?: NonArraySchemaObjectType;
	}
	interface BaseSchemaObject {
		title?: string;
		description?: string;
		format?: string;
		default?: any;
		multipleOf?: number;
		maximum?: number;
		exclusiveMaximum?: boolean;
		minimum?: number;
		exclusiveMinimum?: boolean;
		maxLength?: number;
		minLength?: number;
		pattern?: string;
		additionalProperties?: boolean | SchemaObject;
		maxItems?: number;
		minItems?: number;
		uniqueItems?: boolean;
		maxProperties?: number;
		minProperties?: number;
		required?: string[];
		enum?: any[];
		properties?: {
			[name: string]: SchemaObject;
		};
		allOf?: SchemaObject[];
		oneOf?: SchemaObject[];
		anyOf?: SchemaObject[];
		not?: SchemaObject;
		nullable?: boolean;
		discriminator?: DiscriminatorObject;
		readOnly?: boolean;
		writeOnly?: boolean;
		xml?: XMLObject;
		externalDocs?: ExternalDocumentationObject;
		example?: any;
		deprecated?: boolean;
	}
	interface DiscriminatorObject {
		propertyName: string;
		mapping?: {
			[value: string]: string;
		};
	}
	interface XMLObject {
		name?: string;
		namespace?: string;
		prefix?: string;
		attribute?: boolean;
		wrapped?: boolean;
	}

	interface ExampleObject {
		summary?: string;
		description?: string;
		value?: any;
		externalValue?: string;
	}
	interface MediaTypeObject {
		schema?: SchemaObject;
		example?: any;
		examples?: {
			[media: string]: ExampleObject;
		};
		encoding?: {
			[media: string]: EncodingObject;
		};
	}
	interface EncodingObject {
		contentType?: string;
		headers?: {
			[header: string]: HeaderObject;
		};
		style?: string;
		explode?: boolean;
		allowReserved?: boolean;
	}
	interface RequestBodyObject {
		description?: string;
		content: {
			[media: string]: MediaTypeObject;
		};
		required?: boolean;
		opId: string; // added by parser
	}
	interface ResponsesObject {
		[code: string]: ResponseObject;
	}
	interface ResponseObject {
		description: string;
		headers?: {
			[header: string]: HeaderObject;
		};
		content?: {
			[media: string]: MediaTypeObject;
		};
		links?: {
			[link: string]: LinkObject;
		};
	}
	interface LinkObject {
		operationRef?: string;
		operationId?: string;
		parameters?: {
			[parameter: string]: any;
		};
		requestBody?: any;
		description?: string;
		server?: ServerObject;
	}
	interface CallbackObject {
		[url: string]: PathItemObject;
	}
	interface SecurityRequirementObject {
		[name: string]: string[];
	}
	interface ComponentsObject {
		schemas?: {
			[key: string]: SchemaObject;
		};
		responses?: {
			[key: string]: ResponseObject;
		};
		parameters?: {
			[key: string]: ParameterObject;
		};
		examples?: {
			[key: string]: ExampleObject;
		};
		requestBodies?: {
			[key: string]: RequestBodyObject;
		};
		headers?: {
			[key: string]: HeaderObject;
		};
		securitySchemes?: {
			[key: string]: SecuritySchemeObject;
		};
		links?: {
			[key: string]: LinkObject;
		};
		callbacks?: {
			[key: string]: CallbackObject;
		};
	}
	type SecuritySchemeObject =
		| HttpSecurityScheme
		| ApiKeySecurityScheme
		| OAuth2SecurityScheme
		| OpenIdSecurityScheme;
	interface HttpSecurityScheme {
		type: "http";
		description?: string;
		scheme: string;
		bearerFormat?: string;
	}
	interface ApiKeySecurityScheme {
		type: "apiKey";
		description?: string;
		name: string;
		in: string;
	}
	interface OAuth2SecurityScheme {
		type: "oauth2";
		description?: string;
		flows: {
			implicit?: {
				authorizationUrl: string;
				refreshUrl?: string;
				scopes: {
					[scope: string]: string;
				};
			};
			password?: {
				tokenUrl: string;
				refreshUrl?: string;
				scopes: {
					[scope: string]: string;
				};
			};
			clientCredentials?: {
				tokenUrl: string;
				refreshUrl?: string;
				scopes: {
					[scope: string]: string;
				};
			};
			authorizationCode?: {
				authorizationUrl: string;
				tokenUrl: string;
				refreshUrl?: string;
				scopes: {
					[scope: string]: string;
				};
			};
		};
	}
	interface OpenIdSecurityScheme {
		type: "openIdConnect";
		description?: string;
		openIdConnectUrl: string;
	}
	interface TagObject {
		name: string;
		description?: string;
		externalDocs?: ExternalDocumentationObject;
	}
}

export interface IJsonSchema {
	id?: string;
	$schema?: string;
	title?: string;
	description?: string;
	multipleOf?: number;
	maximum?: number;
	exclusiveMaximum?: boolean;
	minimum?: number;
	exclusiveMinimum?: boolean;
	maxLength?: number;
	minLength?: number;
	pattern?: string;
	additionalItems?: boolean | IJsonSchema;
	items?: IJsonSchema | IJsonSchema[];
	maxItems?: number;
	minItems?: number;
	uniqueItems?: boolean;
	maxProperties?: number;
	minProperties?: number;
	required?: string[];
	additionalProperties?: boolean | IJsonSchema;
	definitions?: {
		[name: string]: IJsonSchema;
	};
	properties?: {
		[name: string]: IJsonSchema;
	};
	patternProperties?: {
		[name: string]: IJsonSchema;
	};
	dependencies?: {
		[name: string]: IJsonSchema | string[];
	};
	enum?: any[];
	type?: string | string[];
	allOf?: IJsonSchema[];
	anyOf?: IJsonSchema[];
	oneOf?: IJsonSchema[];
	not?: IJsonSchema;
	$ref?: string;
}

export type PossiblyRefNode = {
	$ref?: string;
	[key: string]: unknown;
};
