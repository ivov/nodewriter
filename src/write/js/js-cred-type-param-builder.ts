import * as recast from "recast";
import type { AuthMechanism, SimpleAuth, OAuth2AuthCodeAuth } from "~/types";

const b = recast.types.builders;

export class JsCredTypeParamBuilder {
	httpOrApiKeyParams(auth: Omit<AuthMechanism, "OAuth2AuthCodeAuth">) {
		const displayName =
			auth.type === "http:bearer" ? "Bearer Token" : "API Key";

		const internalName = auth.type === "http:bearer" ? "token" : "apiKey";

		return b.arrayExpression([
			b.objectExpression([
				b.property("init", b.identifier("displayName"), b.literal(displayName)),
				b.property("init", b.identifier("name"), b.literal(internalName)),
				b.property("init", b.identifier("type"), b.literal("string")),
				b.property(
					"init",
					b.identifier("typeOptions"),
					b.objectExpression([
						b.property("init", b.identifier("password"), b.literal(true)),
					]),
				),
				b.property("init", b.identifier("required"), b.literal(true)),
				b.property("init", b.identifier("default"), b.literal("")),
			]),
		]);
	}

	oAuth2Params(auth: OAuth2AuthCodeAuth) {
		return b.arrayExpression([
			b.objectExpression([
				b.property(
					"init",
					b.identifier("displayName"),
					b.literal("Grant Type"),
				),
				b.property("init", b.identifier("name"), b.literal("grantType")),
				b.property("init", b.identifier("type"), b.literal("hidden")),
				b.property(
					"init",
					b.identifier("default"),
					b.literal("authorizationCode"),
				),
			]),
			b.objectExpression([
				b.property(
					"init",
					b.identifier("displayName"),
					b.literal("Authorization URL"),
				),
				b.property("init", b.identifier("name"), b.literal("authUrl")),
				b.property("init", b.identifier("type"), b.literal("hidden")),
				b.property(
					"init",
					b.identifier("default"),
					b.literal(auth.authorizationUrl),
				),
				b.property("init", b.identifier("required"), b.literal(true)),
			]),
			b.objectExpression([
				b.property(
					"init",
					b.identifier("displayName"),
					b.literal("Access Token URL"),
				),
				b.property("init", b.identifier("name"), b.literal("accessTokenUrl")),
				b.property("init", b.identifier("type"), b.literal("hidden")),
				b.property("init", b.identifier("default"), b.literal(auth.tokenUrl)),
				b.property("init", b.identifier("required"), b.literal(true)),
			]),
			b.objectExpression([
				b.property("init", b.identifier("displayName"), b.literal("Scope")),
				b.property("init", b.identifier("name"), b.literal("scope")),
				b.property("init", b.identifier("type"), b.literal("hidden")),
				b.property(
					"init",
					b.identifier("default"),
					auth.scopes.length === 0
						? b.literal("")
						: b.callExpression(
								b.memberExpression(
									b.arrayExpression(
										auth.scopes.map((scope) => b.literal(scope)),
									),
									b.identifier("join"),
								),
								[b.literal(" ")],
							),
				),
			]),
		]);
	}

	authenticate(auth: SimpleAuth) {
		const propertyKey =
			auth.type === "http:bearer" || auth.type === "api-key:header"
				? "headers"
				: "qs";
		const authKey =
			auth.type === "http:bearer"
				? "Authorization"
				: auth.type === "api-key:query"
					? auth.qsKey
					: `'${auth.headerName}'`;
		const authValue =
			auth.type === "http:bearer"
				? "Bearer {{ $credentials.token }}"
				: `={{ $credentials.apiKey }}`;

		return b.objectExpression([
			b.property("init", b.identifier("type"), b.literal("generic")),
			b.property(
				"init",
				b.identifier("properties"),
				b.objectExpression([
					b.property(
						"init",
						b.identifier(propertyKey),
						b.objectExpression([
							b.property("init", b.identifier(authKey), b.literal(authValue)),
						]),
					),
				]),
			),
		]);
	}
}
