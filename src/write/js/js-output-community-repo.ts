import { GeneratorOutput } from "../../types";
import path from "node:path";
import fs from "node:fs/promises";
import { exec as execCb } from "node:child_process";
import { promisify } from "node:util";
import { Formatter } from "../formatter";

const exec = promisify(execCb);

const COMMUNITY_NODE_STARTER_REPO_URL =
	"https://github.com/n8n-io/n8n-nodes-starter.git";
const MAIN_INPUT_TYPE = "NodeConnectionType.Main";

export async function generateCommunityRepository(
	data: GeneratorOutput,
	outputDir: string,
	repoName: string,
) {
	await cloneCommunityStarterRepo(outputDir, repoName);
	await cleanDirs(data, outputDir, repoName);

	const className = getNodeClassName(data);

	const { Formatter } = await import("~/write/formatter");
	const formatter = new Formatter();

	const nodeDistFilePath = await writeNodeFile(
		data,
		formatter,
		outputDir,
		repoName,
		className,
	);
	const credDistFilePaths = await writeCredentialFiles(
		data,
		formatter,
		outputDir,
		repoName,
	);

	await updatePackageJson(
		formatter,
		outputDir,
		repoName,
		nodeDistFilePath,
		credDistFilePaths,
	);
}

async function cloneCommunityStarterRepo(outputDir: string, repoName: string) {
	await fs.mkdir(`${outputDir}/${repoName}`, { recursive: true });

	await exec(`git clone ${COMMUNITY_NODE_STARTER_REPO_URL} .`, {
		cwd: `${outputDir}/${repoName}`,
	});
}

async function cleanDirs(
	data: GeneratorOutput,
	outputDir: string,
	repoName: string,
) {
	await exec(`rm -rf ./${repoName}/nodes/*`, { cwd: outputDir });

	if (!data.credTypes.length) {
		await exec(`rm -rf ./${repoName}/credentials`, { cwd: outputDir });
	} else {
		await exec(`rm -rf ./${repoName}/credentials/*`, { cwd: outputDir });
	}
}

function getNodeClassName(data: GeneratorOutput) {
	return data.nodeType.fileName.split(".")[0];
}

async function writeNodeFile(
	data: GeneratorOutput,
	formatter: Formatter,
	outputDir: string,
	repoName: string,
	className: string,
) {
	const nodeDir = path.join(`${outputDir}/${repoName}/nodes/${className}`);
	await fs.mkdir(nodeDir, { recursive: true });

	const nodeTypePath = path.join(
		`${outputDir}/${repoName}/nodes/${className}`,
		data.nodeType.fileName.replace(".json", ".ts"),
	);

	let source = data.nodeType.source;
	source = source.replace(
		'"inputs": ["main"],',
		`inputs: [${MAIN_INPUT_TYPE}],`,
	);
	source = source.replace(
		'"outputs": ["main"],',
		`outputs: [${MAIN_INPUT_TYPE}],`,
	);

	let fileContent = `
    import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

    export class ${className} implements INodeType {
      description: INodeTypeDescription = ${source};
  }`;

	fileContent = await formatter.format(fileContent, "ts");

	await fs.writeFile(nodeTypePath, fileContent);

	return `dist/nodes/${className}/${data.nodeType.fileName.replace(".json", ".js")}`;
}

async function writeCredentialFiles(
	data: GeneratorOutput,
	formatter: Formatter,
	outputDir: string,
	repoName: string,
) {
	const credentialDistPaths: string[] = [];

	for (const credType of data.credTypes) {
		const credClassName = credType.fileName.split(".")[0];
		const credTypePath = path.join(
			`${outputDir}/${repoName}/credentials`,
			credType.fileName.replace(".json", ".ts"),
		);
		const credJson = JSON.parse(credType.source);
		let source = `
      import {
        ICredentialType,
        INodeProperties,
        ${credJson.authenticate ? `IAuthenticateGeneric,` : ""}
      } from 'n8n-workflow';

      export class ${credClassName} implements ICredentialType {
        name = "${credJson.name}";
        displayName = "${credJson.displayName}";
        documentationUrl = "${credJson.documentationUrl}";
        properties: INodeProperties[] = ${JSON.stringify(credJson.properties)};

        ${credJson.authenticate ? `authenticate: IAuthenticateGeneric = ${JSON.stringify(credJson.authenticate)};` : ""}
    }`;

		source = await formatter.format(source, "ts");
		await fs.writeFile(credTypePath, source);

		credentialDistPaths.push(
			`dist/credentials/${credType.fileName.replace(".json", ".js")}`,
		);
	}

	return credentialDistPaths;
}

async function updatePackageJson(
	formatter: Formatter,
	outputDir: string,
	repoName: string,
	nodeDistPath: string,
	credDistPaths: string[],
) {
	const packageJson = await fs.readFile(
		`${outputDir}/${repoName}/package.json`,
		"utf-8",
	);
	const packageJsonObj = JSON.parse(packageJson);

	packageJsonObj.name = repoName;
	const n8nEntry = packageJsonObj.n8n;

	packageJsonObj.n8n = {
		...n8nEntry,
		credentials: credDistPaths,
		nodes: [nodeDistPath],
	};

	packageJsonObj.keywords.push("nodewriter");

	try {
		const { stdout: name } = await exec(`git config user.name`);
		const { stdout: email } = await exec(`git config user.email`);

		packageJsonObj.author = {
			name: name.replace("\n", ""),
			email: email.replace("\n", ""),
		};
	} catch (e) {
		console.log(e);
	}

	const updatedPackageJson = await formatter.format(
		JSON.stringify(packageJsonObj, null, 2),
		"json",
	);
	await fs.writeFile(
		`${outputDir}/${repoName}/package.json`,
		updatedPackageJson,
	);
}
