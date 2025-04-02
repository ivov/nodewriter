import { readFileSync, readdirSync, existsSync, statSync, writeFileSync } from "node:fs";
import { parse, join } from "node:path";

function createInputsOutputsTable() {
  const INPUT_DIR = "sample-inputs";
  const OUTPUT_DIR = "sample-outputs";
  
  const specFiles = readdirSync(INPUT_DIR)
    .filter(file => file.endsWith(".json"));
  
  const tableRows = specFiles.map(specFile => {
    const serviceName = parse(specFile).name;
    const serviceDir = join(OUTPUT_DIR, serviceName);
    
    if (!existsSync(serviceDir) || !statSync(serviceDir).isDirectory()) {
      return `| [\`${specFile}\`](./sample-inputs/${specFile}) | - | - |`;
    }
    
    const serviceFiles = readdirSync(serviceDir);
    const nodeFile = serviceFiles.find(file => file.endsWith(".node.js"));
    const credFiles = serviceFiles.filter(file => file.endsWith(".credentials.js"));
    const specLink = `[\`${specFile}\`](./sample-inputs/${specFile})`;
    const nodeLink = nodeFile 
      ? `[\`${nodeFile}\`](./sample-outputs/${serviceName}/${nodeFile})`
      : "-";
    const credLinks = credFiles.length
      ? credFiles.map(file => `[\`${file}\`](./sample-outputs/${serviceName}/${file})`).join(" + ")
      : "-";
    
    return `| ${specLink} | ${nodeLink} | ${credLinks} |`;
  });
  
  const tableHeader = [
    "| OpenAPI spec | Output n8n node | Output n8n credentials |",
    "| --- | --- | --- |"
  ].join("\n");
  
  return `${tableHeader}\n${tableRows.join("\n")}`;
}

const README_PATH = "./README.md";
const table = createInputsOutputsTable();
const START_MARKER = "<!-- TABLE_START -->";
const END_MARKER = "<!-- TABLE_END -->";

try {
  const content = readFileSync(README_PATH, "utf8");
  const before = content.split(START_MARKER)[0];
  const after = content.split(END_MARKER)[1];
  writeFileSync(README_PATH, `${before}${START_MARKER}\n${table}\n${END_MARKER}${after}`);
} catch (error) {
  console.error(error);
}

console.log("README.md updated with generated table");