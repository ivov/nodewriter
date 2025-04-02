#!/bin/bash

if [[ $# -lt 2 ]]; then
  echo "Usage: $0 <command> <type>"
  echo "  command: benchmark|profile"
  echo "  type: js|json (generator type)"
  exit 1
fi

COMMAND=$1
TYPE=$2

TOOL=""
if [[ "$COMMAND" == "benchmark" ]]; then
  TOOL="hyperfine"
elif [[ "$COMMAND" == "profile" ]]; then
  TOOL="0x"
else
  echo "Unknown command: $COMMAND"
  exit 1
fi

if ! command -v $TOOL &> /dev/null; then
  echo "Error: $TOOL is not installed. Please install it first."
  exit 1
fi

cp scripts/generate-$TYPE.ts src/
tsc -p tsconfig.build.json
rm src/generate-$TYPE.ts

if [[ "$COMMAND" == "benchmark" ]]; then
  hyperfine -m 25 "node -r tsconfig-paths/register dist/generate-$TYPE.js"
elif [[ "$COMMAND" == "profile" ]]; then
  0x --output-dir "$TMPDIR" -o dist/generate-$TYPE.js
fi