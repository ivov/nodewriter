import fs from "node:fs/promises";
import path from "node:path";
import { SpecParser } from "~/parse/spec-parser";
import { JsGenerator } from "~/write/js-generator";
import { JsCredTypeGenerator } from "~/write/js/js-cred-type-generator";
import { JsonGenerator } from "~/write/json-generator";

async function output(serviceName: string) {
	const extractPath = `sample-outputs/${serviceName}/${serviceName}.extract.json`;
	const extractContent = await fs.readFile(extractPath, "utf8");
	const extract = JSON.parse(extractContent);
	const outputDir = path.dirname(extractPath);

	const [jsResults, jsonResults] = await Promise.all([
		new JsGenerator().run(extract),
		new JsonGenerator().run(extract),
	]);

	await Promise.all([
		fs.writeFile(
			path.join(outputDir, jsResults.nodeType.fileName),
			jsResults.nodeType.source,
		),

		...jsResults.credTypes.map((credType) =>
			fs.writeFile(path.join(outputDir, credType.fileName), credType.source),
		),

		fs.writeFile(
			path.join(outputDir, jsonResults.nodeType.fileName),
			jsonResults.nodeType.source,
		),

		...jsonResults.credTypes.map((credType) =>
			fs.writeFile(path.join(outputDir, credType.fileName), credType.source),
		),
	]);
}

async function snippets() {
	const SNIPPETS_INPUT_DIR = "sample-inputs/_snippets";
	const SNIPPETS_OUTPUT_DIR = "sample-outputs/_snippets";

	await fs.mkdir(SNIPPETS_OUTPUT_DIR, { recursive: true });

	const snippetFiles = (await fs.readdir(SNIPPETS_INPUT_DIR)).filter(
		(file) => path.parse(file).ext === ".json",
	);

	await Promise.all(
		snippetFiles.map(async (file) => {
			const extract = await new SpecParser().parse(
				path.join(SNIPPETS_INPUT_DIR, file),
			);
			const jsCredGenerator = new JsCredTypeGenerator();
			const credTypes = await jsCredGenerator.generate(extract, true);

			await Promise.all(
				credTypes.map((credType) =>
					fs.writeFile(
						path.join(SNIPPETS_OUTPUT_DIR, credType.fileName),
						credType.source,
					),
				),
			);
		}),
	);
}

(async () => {
	const INPUTS_DIR = "sample-inputs";

	const serviceNames = (await fs.readdir(INPUTS_DIR))
		.filter((file) => path.parse(file).ext === ".json")
		.map((file) => path.parse(file).name);

	await Promise.all(serviceNames.map((name) => output(name)));

	await snippets();

	console.log("Wrote node and cred types for all samples");
})();
