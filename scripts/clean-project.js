#!/usr/bin/env node

const { exec } = require("child_process");
const fs = require("fs");

console.log("Deleting build files...");
const nextEnv = fs.readFileSync("next-env.d.ts");
const jestConfig = fs.readFileSync("jest.config.js");
exec(
  "rm -rf *.d.ts *.js *.js.map components typography url utils meta cms storybook-static boilerplate out build .next public",
  () => {
    console.log("Creating public folder...");
    fs.writeFileSync("next-env.d.ts", nextEnv);
    fs.writeFileSync("jest.config.js", jestConfig);
    fs.mkdirSync("public");
    fs.writeFileSync("public/.gitkeep", "");

    console.log("Project cleaned with success!");
  }
);
