const fs = require("fs");
const path = require("path");

function createBoilerplate() {
  console.log("Creating boilerplate...");

  if (fs.existsSync("boilerplate")) {
    console.log("Deleting previous build...");
    fs.rmdirSync("boilerplate", { recursive: true });
  }

  console.log("Copying files...");
  fs.mkdirSync("boilerplate");
  fs.copyFileSync(
    "template/babel.config.prod.js",
    "boilerplate/babel.config.js"
  );
  fs.copyFileSync("template/next.config.prod.js", "boilerplate/next.config.js");
  fs.copyFileSync("template/next-env.d.ts", "boilerplate/next-env.d.ts");
  fs.copyFileSync("template/package.json", "boilerplate/package.json");
  fs.copyFileSync(
    "template/babel.config.prod.js",
    "boilerplate/babel.config.js"
  );
  fs.copyFileSync("template/app.json", "boilerplate/app.json");
  fs.copyFileSync("template/icon.svg", "boilerplate/icon.svg");
  fs.copyFileSync("template/tsconfig.json", "boilerplate/tsconfig.json");
  fs.copyFileSync("template/.env.example", "boilerplate/.env.example");

  copyFolderRecursiveSync("pages", "boilerplate");
  copyFolderRecursiveSync("app", "boilerplate");

  console.log('Boilerplate created with success!')
}

function copyFolderRecursiveSync(from, to) {
  let files = [];

  const targetFolder = path.join(to, path.basename(from));
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  if (fs.lstatSync(from).isDirectory()) {
    files = fs.readdirSync(from);
    files.forEach(function (file) {
      const currentSource = path.join(from, file);
      if (fs.lstatSync(currentSource).isDirectory()) {
        copyFolderRecursiveSync(currentSource, targetFolder);
      } else {
        copyFileSync(currentSource, targetFolder);
      }
    });
  }
}

function copyFileSync(from, to) {
  let targetFile = to;

  if (fs.existsSync(to)) {
    if (fs.lstatSync(to).isDirectory()) {
      targetFile = path.join(to, path.basename(from));
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(from));
}

createBoilerplate();
