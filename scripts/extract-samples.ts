import fs from "node:fs/promises";
import path from "node:path";
import { SpecParser } from "~/parse/spec-parser";

(async () => {
	const inputDir = "sample-inputs";
	const outputDir = "sample-outputs";

	const files = (await fs.readdir(inputDir)).filter(
		(file) => path.parse(file).ext === ".json",
	);

	for (const file of files) {
		const serviceName = path.parse(file).name;
		const outputPath = path.join(outputDir, serviceName);

		await fs.mkdir(outputPath, { recursive: true });

		const refSpec = await new SpecParser().load(path.join(inputDir, file));
		const derefSpec = new SpecParser().removeRefs(refSpec);

		await fs.writeFile(
			path.join(outputPath, `${serviceName}.deref.json`),
			JSON.stringify(derefSpec, null, 2),
		);

		const extract = new SpecParser().extract(derefSpec);

		await fs.writeFile(
			path.join(outputPath, `${serviceName}.extract.json`),
			JSON.stringify(extract, null, 2),
		);
	}

	console.log("Obtained extracts for all samples");
})();
