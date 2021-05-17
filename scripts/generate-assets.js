#!/usr/bin/env node

const [appPath, outPath] = process.argv.slice(2);

const generateAssets = require("../generate-assets").generateAssets;
generateAssets({ appPath, outPath });
