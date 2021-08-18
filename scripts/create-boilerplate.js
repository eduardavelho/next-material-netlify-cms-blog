const { promises, existsSync } = require("fs");
const fs = promises;
const path = require("path");
const generateAssets = require("../utils/generate-assets").generateAssets;

async function createBoilerplate() {
  console.log("Creating boilerplate...");

  if (existsSync("boilerplate")) {
    console.log("Deleting previous build...");
    await fs.rmdir("boilerplate", { recursive: true });
  }

  console.log("Copying files...");

  await fs.mkdir("boilerplate");
  await fs.mkdir("boilerplate/public");

  await fs.copyFile("template/package.json", "boilerplate/package.json");
  await fs.copyFile("template/tsconfig.json", "boilerplate/tsconfig.json");

  await fs.copyFile("app.json", "boilerplate/app.json");
  await fs.copyFile("icon.svg", "boilerplate/icon.svg");
  await fs.copyFile(".env.example", "boilerplate/.env");

  await copyFolderRecursive("pages", "boilerplate");
  await copyFolderRecursive("app", "boilerplate");

  await generateAssets({
    appPath: "boilerplate/app.json",
    outPath: "boilerplate/public",
  });

  console.log("Boilerplate created with success!");
}

async function copyFolderRecursive(from, to) {
  let files = [];

  const targetFolder = path.join(to, path.basename(from));
  if (!existsSync(targetFolder)) {
    await fs.mkdir(targetFolder);
  }

  if ((await fs.lstat(from)).isDirectory()) {
    files = await fs.readdir(from);

    for (file of files) {
      const currentSource = path.join(from, file);
      if ((await fs.lstat(currentSource)).isDirectory()) {
        await copyFolderRecursive(currentSource, targetFolder);
      } else {
        await copyFile(currentSource, targetFolder);
      }
    }
  }
}

async function copyFile(from, to) {
  let targetFile = to;

  if (existsSync(to)) {
    if ((await fs.lstat(to)).isDirectory()) {
      targetFile = path.join(to, path.basename(from));
    }
  }

  await fs.writeFile(targetFile, await fs.readFile(from));
}

createBoilerplate();
