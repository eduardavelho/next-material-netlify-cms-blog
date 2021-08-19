#!/usr/bin/env node

const { exec } = require("child_process");
const fs = require("fs");

console.log("Deleting build files...");
exec(
  "rm -rf *.d.ts *.js *.js.map components api utils meta netlify-cms storybook-static boilerplate out build .next public",
  () => {
    console.log("Creating public folder...");
    fs.mkdirSync("public");
    fs.writeFileSync("public/.gitkeep", "");

    console.log("Project cleaned with success!");
  }
);
