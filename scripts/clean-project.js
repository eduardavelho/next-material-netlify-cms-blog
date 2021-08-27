#!/usr/bin/env node

const { exec } = require("child_process");
const fs = require("fs");

console.log("Deleting build files...");
const nextEnv = fs.readFileSync("next-env.d.ts");
exec(
  "rm -rf *.d.ts *.js *.js.map components typography url utils meta cms storybook-static boilerplate out build .next public",
  () => {
    console.log("Creating public folder...");
    fs.writeFileSync("next-env.d.ts", nextEnv);
    fs.mkdirSync("public");
    fs.writeFileSync("public/.gitkeep", "");

    console.log("Project cleaned with success!");
  }
);
