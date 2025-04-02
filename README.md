# nodewriter

Generate n8n nodes from OpenAPI specs. Experimental.

<!-- TABLE_START -->
| OpenAPI spec | Output n8n node | Output n8n credentials |
| --- | --- | --- |
| [`asana.json`](./sample-inputs/asana.json) | [`Asana.node.js`](./sample-outputs/asana/Asana.node.js) | [`AsanaApi.credentials.js`](./sample-outputs/asana/AsanaApi.credentials.js) + [`AsanaOAuth2Api.credentials.js`](./sample-outputs/asana/AsanaOAuth2Api.credentials.js) |
| [`github.json`](./sample-inputs/github.json) | [`GitHub.node.js`](./sample-outputs/github/GitHub.node.js) | - |
| [`hacker-news.json`](./sample-inputs/hacker-news.json) | [`HackerNews.node.js`](./sample-outputs/hacker-news/HackerNews.node.js) | - |
| [`hetzner.json`](./sample-inputs/hetzner.json) | [`Hetzner.node.js`](./sample-outputs/hetzner/Hetzner.node.js) | - |
| [`lichess.json`](./sample-inputs/lichess.json) | [`Lichess.node.js`](./sample-outputs/lichess/Lichess.node.js) | [`LichessOAuth2Api.credentials.js`](./sample-outputs/lichess/LichessOAuth2Api.credentials.js) |
| [`n8n.json`](./sample-inputs/n8n.json) | [`N8n.node.js`](./sample-outputs/n8n/N8n.node.js) | [`N8nApi.credentials.js`](./sample-outputs/n8n/N8nApi.credentials.js) |
| [`openai.json`](./sample-inputs/openai.json) | [`OpenAi.node.js`](./sample-outputs/openai/OpenAi.node.js) | - |
| [`wayback.json`](./sample-inputs/wayback.json) | [`Wayback.node.js`](./sample-outputs/wayback/Wayback.node.js) | - |
<!-- TABLE_END -->

Small MVP to play with AST transformers.

## Installation

```sh
npm install -g nodewriter
```

## Usage

```sh
nodewriter path/to/open-api-spec.json [options]
```

Options:

- `--service-name <name>` to customize the service name to use in output files
- `--skip-formatting` to skip formatting for output files - default: `false`
- `--output-dir <dir>` to set output dir - default: `./nodewriter-output`
- `--experimental-json` to output JSON instead of JS - default: `false`

Example:

```sh
nodewriter my-specs/fff.json --service-name FridaysForFuture
```

Requirements:

- The input OpenAPI spec must be JSON. If YAML, [convert](https://editor.swagger.io/) it first.
- The input OpenAPI spec must be 3.0 or 3.1. If 2.0, [convert](https://editor.swagger.io) it first.
- The input OpenAPI spec must be [compliant](https://swagger.io/specification/). To validate, [lint](https://github.com/daveshanley/vacuum) it first.

Caveats:

- This is an exploratory project, not meant for production use. API may change between 0.x versions until stable. As of March 2025, the JSON output is not a runnable n8n node - this is an experiment on the future direction of n8n nodes.
- Many specs do not specify a [security scheme](https://swagger.io/specification/#security-scheme-object) even though the service requires auth, e.g. GitHub and OpenAI. Without a security scheme, we cannot generate n8n credentials. Either ask the spec owner to add a security scheme, or add it yourself.


## Development

### Setup

```sh
bun -v # >= 1.2
pnpm -v # >= 9.7

git clone https://github.com/ivov/nodewriter.git
cd nodewriter
pnpm install

bun src/cli.ts path/to/openapi-spec.json
```

### Testing

The `sample-outputs` dir holds snapshots of valid outputs. Before committing, a git hook will regenerate all snapshots and check if anything has changed. If the changes are intended, then stage those changes as well. If any changes are unintended, then the commit contains a bug to fix.

Why not traditional snapshot testing? This flow makes diffs in multiple large files easy to inspect, preserves syntax highlighting, and separates outputs by file. `toMatchSnapshot` reports changes via CLI, which is unwiedly for diffs in multiple large files.

### Performance

```sh
brew install hyperfine
npm install -g 0x

pnpm benchmark:js
pnpm profile:js

pnpm benchmark:json
pnpm profile:json
```

## Release

To release a new version:

```sh
pnpm release 0.2.0
```

This will:

- update `package.json`
- commit, tag, push
- create GitHub release
- publish to npm
