#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { SpecParser } from "~/parse/spec-parser";
import { JsGenerator } from "~/write/js-generator";
import { CLI_HELP_MSG } from "~/constants";
import { JsonGenerator } from "./write/json-generator";

async function main() {
	const args = process.argv.slice(2);

	if (args.length < 1 || args.includes("--help") || args.includes("-h")) {
		console.log(CLI_HELP_MSG);
		process.exit(0);
	}

	const specPath = args[0];

	const customServiceName = getOption(args, "--service-name");
	const pretty = getOption(args, "--skip-formatting") ? false : true;
	const outputDir = getOption(args, "--output-dir") || "./nodewriter-output";
	const experimentalJson = getOption(args, "--experimental-json");

	try {
		await fs.mkdir(outputDir, { recursive: true });

		console.log(`Parsing OpenAPI spec: ${specPath}`);
		const extract = await new SpecParser().parse(specPath);

		console.log("Generating...");
		const generator = experimentalJson
			? new JsonGenerator({ pretty })
			: new JsGenerator({ pretty });

		const result = await generator.run(
			extract,
			customServiceName ?? extract.descriptors.nodeTypeClassName,
		);

		const nodeTypePath = path.join(outputDir, result.nodeType.fileName);
		await fs.writeFile(nodeTypePath, result.nodeType.source);
		console.log(`Node type written to: ${nodeTypePath}`);

		for (const credType of result.credTypes) {
			const credTypePath = path.join(outputDir, credType.fileName);
			await fs.writeFile(credTypePath, credType.source);
			console.log(`Credential type written to: ${credTypePath}`);
		}
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
}

function getOption(args: string[], name: string) {
	const index = args.indexOf(name);
	if (index === -1) return;
	return args[index + 1];
}

main();
