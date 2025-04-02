import type * as recast from "recast";
import type { Configuration as BiomeConfiguration } from "@biomejs/js-api";

export const CLI_HELP_MSG = `
nodewriter - Generate n8n nodes from OpenAPI specs

Usage:
  nodewriter path/to/openapi-spec.json [options]

Options:
  --service-name <name>    to customize service name to use in output files
  --skip-formatting        to skip formatting for output files - default: false
  --output-dir <dir>       to set the output dir - default: ./nodewriter-output
  --experimental-json      to output JSON instead of JS - default: false

Example:
  nodewriter my-specs/fff.json --service-name FridaysForFuture
`;

export const LAZY_PRINT_OPTIONS: recast.Options = {
	reuseWhitespace: false,
	objectCurlySpacing: false,
	tokens: false,
};

export const FORMATTER_OPTIONS: BiomeConfiguration = {
	files: {
		maxSize: 5 * 1024 * 1024, // 5 MiB
	},
	javascript: {
		formatter: {
			quoteStyle: "single",
			lineWidth: 100,
		},
	},
	json: {
		formatter: {
			lineWidth: 100,
		},
	},
};
