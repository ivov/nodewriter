#!/bin/bash

# Usage: ./release.sh 0.2.0

VERSION=$1

if [[ -z "$VERSION" ]]; then
  echo "Usage: ./release.sh VERSION"
  exit 1
fi

node -e "
  const fs = require('fs');
  const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  pkg.version = '$VERSION';
  fs.writeFileSync('./package.json', JSON.stringify(pkg, null, '\t'));
"

git add package.json
git commit -m "Release $VERSION"
git tag $VERSION
git push && git push --tags