import * as recast from "recast";
import { camelCase, capitalCase } from "~/casing";
import { JsCredTypeParamBuilder } from "~/write/js/js-cred-type-param-builder";
import { LAZY_PRINT_OPTIONS } from "~/constants";
import type { Auth, Extract } from "~/types";

const b = recast.types.builders;

export class JsCredTypeGenerator {
	constructor(private readonly paramBuilder = new JsCredTypeParamBuilder()) {}

	async generate(extract: Extract, pretty: boolean) {
		const { auth } = extract.descriptors;

		if (auth.length === 0) return [];

		const promises = auth.map(async (auth) => {
			const fileAst = this.credTypeAst(auth, extract.descriptors.docsUrl);

			let { code: source } = recast.print(fileAst, LAZY_PRINT_OPTIONS);

			if (pretty) {
				const { Formatter } = await import("~/write/formatter");
				source = await new Formatter().format(source, "js");
			}

			return {
				fileName: auth.credTypeClassName + ".credentials.js",
				source,
			};
		});

		return Promise.all(promises);
	}

	private credTypeAst(auth: Auth, docsUrl: string) {
		const { credTypeClassName: className } = auth;
		const internalName = camelCase(className);
		const displayName = capitalCase(className);

		const classProps = [
			b.classProperty(b.identifier("name"), b.literal(internalName)),
		];

		if (auth.type === "oauth2:authorization-code") {
			classProps.push(
				b.classProperty(
					b.identifier("extends"),
					b.arrayExpression([b.literal("oAuth2Api")]),
				),
			);
		}

		classProps.push(
			b.classProperty(b.identifier("displayName"), b.literal(displayName)),
			b.classProperty(b.identifier("documentationUrl"), b.literal(docsUrl)),
			b.classProperty(
				b.identifier("properties"),
				auth.type === "oauth2:authorization-code"
					? this.paramBuilder.oAuth2Params(auth)
					: this.paramBuilder.httpOrApiKeyParams(auth),
			),
		);

		if (
			auth.type === "api-key:header" ||
			auth.type === "api-key:query" ||
			auth.type === "http:bearer"
		) {
			classProps.push(
				b.classProperty(
					b.identifier("authenticate"),
					this.paramBuilder.authenticate(auth),
				),
			);
		}

		const expression = b.assignmentExpression(
			"=",
			b.memberExpression(b.identifier("exports"), b.identifier(className)),
			b.classExpression(b.identifier(className), b.classBody(classProps), null),
		);

		return {
			type: "File",
			program: b.program([b.expressionStatement(expression)]),
		};
	}
}
