#!/bin/bash

set -e

echo "Regenerating sample outputs..."
pnpm samples

if git diff --quiet sample-outputs/; then
  echo "OK sample outputs remained identical"
  exit 0
else
  echo "(!) Sample outputs had changes"
  echo "Inspect these changes using: git diff sample-outputs"
  echo "If intended, stage them and commit again, else fix generator"
  exit 1
fi