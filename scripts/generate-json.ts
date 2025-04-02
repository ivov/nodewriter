require("tsconfig-paths").register({
	baseUrl: "./dist",
	paths: {
		"~/*": ["./*"],
	},
});

import { SpecParser } from "~/parse/spec-parser";
import { JsonGenerator } from "~/write/json-generator";

(async () => {
	const specPath = "sample-inputs/asana.json";

	const extract = await new SpecParser().parse(specPath);

	const jsGenerator = new JsonGenerator({ pretty: false });

	await jsGenerator.run(extract, "AsanaCustom");
})();
