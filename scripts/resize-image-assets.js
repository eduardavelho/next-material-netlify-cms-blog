#!/usr/bin/env node

const fs = require("fs");

function scriptsResizeImageAssets() {
  const args = process.argv.slice(2);

  /** @type {string[]} */
  let paths = [];
  let size = undefined;

  args.reduce((previousArg, arg) => {
    if (previousArg === "-size") {
      size = parseInt(arg);
    } else if (arg === "-size") {
    } else {
      paths.push(arg);
    }

    return arg;
  }, "");

  if (!size || paths.length === 0) {
    console.log("Error: you must provide the arguments for size and paths.");
    console.log("Example: resize-image-assets -size 256 path/to/a path/to/b");
    return;
  }

  if (!fs.existsSync("utils/resize-image-assets.js")) {
    console.log(
      'Error: you must build the script before running. Please run "npm run build".'
    );
    return;
  }

  const resizeImageAssets = require("../utils/resize-image-assets")
    .resizeImageAssets;
  resizeImageAssets({ paths, size });
}

scriptsResizeImageAssets();
