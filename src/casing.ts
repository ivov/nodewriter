const SPLIT_LOWER_UPPER_REGEX = /([\p{Ll}\d])(\p{Lu})/gu;
const SPLIT_UPPER_UPPER_REGEX = /(\p{Lu})([\p{Lu}][\p{Ll}])/gu;
const DEFAULT_STRIP_REGEX = /[^\p{L}\d]+/giu;
const SPLIT_REPLACE_VALUE = "$1\0$2";

/** Split a string into an array of words. */
function split(input: string) {
	let result = input.trim();

	result = result
		.replace(SPLIT_LOWER_UPPER_REGEX, SPLIT_REPLACE_VALUE)
		.replace(SPLIT_UPPER_UPPER_REGEX, SPLIT_REPLACE_VALUE);

	result = result.replace(DEFAULT_STRIP_REGEX, "\0");

	let start = 0;
	let end = result.length;

	// trim the delimiter from around the output string.
	while (result.charAt(start) === "\0") start++;
	if (start === end) return [];
	while (result.charAt(end - 1) === "\0") end--;

	return result.slice(start, end).split(/\0/g);
}

/** Convert a string to camel case: `fooBar` */
export function camelCase(input: string) {
	return split(input)
		.map((word, index) => {
			if (index === 0) return word.toLowerCase();
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		})
		.join("");
}

/** Convert a string to pascal case: `FooBar` */
export function pascalCase(input: string) {
	return split(input)
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join("");
}

/** Convert a string to capital case: `Foo Bar` */
export function capitalCase(input: string) {
	const result = split(input)
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(" ");

	return standardize(result);
}

const PATTERNS_TO_STANDARDIZE = [
	{ from: /\bApi\b/g, to: "API" },
	{ from: /O Auth/g, to: "OAuth" },
	{ from: /\bId(s)?\b/g, to: "ID$1" },
	{ from: /\bGid(s)?\b/g, to: "GID$1" },
	{ from: /\bIp(s)?\b/g, to: "IP$1" },
	{ from: /\bUrl(s)?\b/g, to: "URL$1" },
];

function standardize(input: string) {
	let result = input;

	for (const { from, to } of PATTERNS_TO_STANDARDIZE) {
		result = result.replace(from, to);
	}

	return result;
}

export const truncate = (str = "", maxLength = 120) => {
	const processed = str.replace(/\.$/, "").replace(/\n/g, " ").trim();

	return processed.length > maxLength
		? processed.substring(0, maxLength) + "..."
		: processed;
};
