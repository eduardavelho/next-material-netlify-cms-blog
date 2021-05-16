#!/usr/bin/env node

const loadFirebase = require("../load-firebase").loadFirebase;
const [outPath] = process.argv.slice(2);

loadFirebase({ outPath });
