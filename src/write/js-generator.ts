import { JsNodeTypeGenerator } from "~/write/js/js-node-type-generator";
import { JsCredTypeGenerator } from "~/write/js/js-cred-type-generator";
import { pascalCase } from "~/casing";
import type { Extract, GeneratorConfig } from "~/types";

export class JsGenerator {
	constructor(
		private readonly config: GeneratorConfig = { pretty: true },
		private readonly jsNodeTypeGenerator = new JsNodeTypeGenerator(),
		private readonly jsCredTypeGenerator = new JsCredTypeGenerator(),
	) {}

	async run(extract: Extract, customServiceName?: string) {
		if (customServiceName) this.customizeClassNames(extract, customServiceName);

		const [nodeType, credTypes] = await Promise.all([
			this.jsNodeTypeGenerator.generate(extract, this.config.pretty),
			this.jsCredTypeGenerator.generate(extract, this.config.pretty),
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
}
