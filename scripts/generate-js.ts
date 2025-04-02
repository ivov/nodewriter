require("tsconfig-paths").register({
	baseUrl: "./dist",
	paths: {
		"~/*": ["./*"],
	},
});

import { SpecParser } from "~/parse/spec-parser";
import { JsGenerator } from "~/write/js-generator";

(async () => {
	const specPath = "sample-inputs/asana.json";

	const extract = await new SpecParser().parse(specPath);

	const jsGenerator = new JsGenerator({ pretty: false });

	await jsGenerator.run(extract, "AsanaCustom");
})();
