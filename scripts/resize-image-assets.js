#!/usr/bin/env node

const args = process.argv.slice(2);
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

const resizeImageAssets = require("../resize-image-assets").resizeImageAssets;
resizeImageAssets({ paths, size });
