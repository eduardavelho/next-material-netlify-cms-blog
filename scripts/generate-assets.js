#!/usr/bin/env node

const fs = require("fs");

function scriptsGenerateAssets() {
  const [appPath, outPath] = process.argv.slice(2);

  if (!appPath || !outPath) {
    console.log(
      "Error: you must provide the arguments for input and output path."
    );
    console.log("Example: generate-assets path/to/app.json path/to/out/folder");
    return;
  }

  if (!fs.existsSync("utils/generate-assets.js")) {
    console.log(
      'Error: you must build the script before running. Please run "npm run build".'
    );
    return;
  }

  const generateAssets = require("../utils/generate-assets").generateAssets;
  generateAssets({ appPath, outPath });
}

scriptsGenerateAssets();
