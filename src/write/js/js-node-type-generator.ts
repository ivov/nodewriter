import * as recast from "recast";
import { camelCase, capitalCase } from "~/casing";
import { JsNodeTypeParamBuilder } from "~/write/js/js-node-type-param-builder";
import { LAZY_PRINT_OPTIONS } from "~/constants";
import type { Extract, FileAst, Auth } from "~/types";

const b = recast.types.builders;

export class JsNodeTypeGenerator {
	constructor(private readonly paramBuilder = new JsNodeTypeParamBuilder()) {}

	async generate(extract: Extract, pretty: boolean) {
		const fileAst = this.nodeTypeAst(extract);

		let { code: source } = recast.print(fileAst, LAZY_PRINT_OPTIONS);

		if (pretty) {
			const { Formatter } = await import("~/write/formatter");
			source = await new Formatter().format(source, "js");
		}

		return {
			fileName: extract.descriptors.nodeTypeClassName + ".node.js",
			source,
		};
	}

	private nodeTypeAst(extract: Extract): FileAst {
		const { auth, nodeTypeClassName, baseUrl, description } =
			extract.descriptors;

		const internalName = camelCase(nodeTypeClassName);
		const displayName = capitalCase(nodeTypeClassName);

		const descriptionProps = [
			b.property("init", b.identifier("displayName"), b.literal(displayName)),
			b.property("init", b.identifier("name"), b.literal(internalName)),
			b.property(
				"init",
				b.identifier("group"),
				b.arrayExpression([b.literal("transform")]),
			),
			b.property("init", b.identifier("version"), b.literal(1)),
			b.property(
				"init",
				b.identifier("subtitle"),
				b.literal('={{ $parameter["operation"] }}'),
			),
			b.property("init", b.identifier("description"), b.literal(description)),
			b.property(
				"init",
				b.identifier("defaults"),
				b.objectExpression([
					b.property("init", b.identifier("name"), b.literal(displayName)),
				]),
			),
			b.property(
				"init",
				b.identifier("inputs"),
				b.arrayExpression([b.literal("main")]),
			),
			b.property(
				"init",
				b.identifier("outputs"),
				b.arrayExpression([b.literal("main")]),
			),
		];

		if (auth.length > 0) {
			descriptionProps.push(this.credentialsProperty(extract, auth));
		}

		descriptionProps.push(
			b.property(
				"init",
				b.identifier("requestDefaults"),
				b.objectExpression([
					b.property("init", b.identifier("baseURL"), b.literal(baseUrl)),
					b.property(
						"init",
						b.identifier("headers"),
						b.objectExpression([
							b.property(
								"init",
								b.identifier("'Content-Type'"),
								b.literal("application/json"),
							),
						]),
					),
					b.property(
						"init",
						b.identifier("returnFullResponse"),
						b.literal(true),
					),
				]),
			),
		);

		descriptionProps.push(
			b.property(
				"init",
				b.identifier("properties"),
				b.arrayExpression(this.paramBuilder.nodeTypeParams(extract)),
			),
		);

		const classBody = b.classBody([
			b.classProperty(
				b.identifier("description"),
				b.objectExpression(descriptionProps),
			),
		]);

		const classExpression = b.classExpression(
			b.identifier(nodeTypeClassName),
			classBody,
			null,
		);

		const assignmentExpression = b.assignmentExpression(
			"=",
			b.memberExpression(
				b.identifier("exports"),
				b.identifier(nodeTypeClassName),
			),
			classExpression,
		);

		return {
			type: "File",
			program: b.program([b.expressionStatement(assignmentExpression)]),
		};
	}

	private credentialsProperty(extract: Extract, auth: Auth[]) {
		const credentialsArray = auth.map((auth) => {
			const credentialsProps = [
				b.property(
					"init",
					b.identifier("name"),
					b.literal(camelCase(auth.credTypeClassName)),
				),
				b.property("init", b.identifier("required"), b.literal(true)),
			];

			if (extract.descriptors.auth.length > 1) {
				// node type with multiple auth types, e.g. Asana
				credentialsProps.push(
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
										b.identifier("authentication"),
										b.arrayExpression([
											b.literal(camelCase(auth.credTypeClassName)),
										]),
									),
								]),
							),
						]),
					),
				);
			}

			return b.objectExpression(credentialsProps);
		});

		return b.property(
			"init",
			b.identifier("credentials"),
			b.arrayExpression(credentialsArray),
		);
	}
}
