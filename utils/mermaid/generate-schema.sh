#!/bin/sh
DIR="$( cd "$( dirname "$0" )" && pwd )"
cd "$DIR"

echo "🧜 Generating schema images using mermaid"
echo "🌚 Generating dark mode schema image"
mmdc -i ./schema.mmd -o dark.png -t dark -b transparent -q
echo "🌝 Generating light mode schema image"
mmdc -i ./schema.mmd -o light.png -b transparent -q
echo "✅ Finished generating schemage images!"