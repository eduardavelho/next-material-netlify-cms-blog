#!/usr/bin/env node

const { promises, existsSync } = require("fs");
const fs = promises;
const path = require("path");
const generateAssets = require("../src/utils/generate-assets").generateAssets;
const packageJson = require("../package.json");
const tsconfigBase = require("../tsconfig.base.json");

const boilerplatePackage = {
  name: "tropicalia-app",
  version: "1.0.0",
  private: true,
  scripts: {
    dev: "next dev",
    start: "next start",
    build: "next build",
    export: "next export",
    "generate-assets": "generate-assets app.json public",
    "resize-image-assets":
      "resize-image-assets .next/static/images public/images -size 640",
  },
  dependencies: {
    "@material-ui/core": packageJson.dependencies["@material-ui/core"],
    "@material-ui/icons": packageJson.dependencies["@material-ui/icons"],
    "@material-ui/lab": packageJson.dependencies["@material-ui/lab"],
    tropicalia: `^${packageJson.version}`,
    next: packageJson.dependencies.next,
    react: packageJson.dependencies.react,
    "react-dom": packageJson.dependencies.react,
  },
  devDependencies: {
    "@types/node": packageJson.devDependencies["@types/node"],
    "@types/react": packageJson.devDependencies["@types/react"],
    typescript: packageJson.devDependencies.typescript,
  },
};

const boilerplateGitIgnore = `
/.next
/out
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json
pids
*.pid
*.seed
*.pid.lock
node_modules
jspm_packages
*.tsbuildinfo
.npm
.env
`;

const boilerplateTsConfig = {
  compilerOptions: {
    ...tsconfigBase.compilerOptions,
    target: "es2020",
    module: "es2020",
    jsx: "preserve",
    moduleResolution: "node",
    lib: ["es2020", "dom"],
    baseUrl: ".",
    noEmit: true,
    noUnusedLocals: false,
  },
  exclude: ["node_modules"],
  include: ["app/**/*", "pages/**/*"],
};

async function createBoilerplate() {
  console.log("Creating boilerplate...");

  if (existsSync("boilerplate")) {
    console.log("Deleting previous build...");
    await fs.rmdir("boilerplate", { recursive: true });
  }

  console.log("Copying files...");

  await fs.mkdir("boilerplate");
  await fs.mkdir("boilerplate/public");

  await fs.writeFile(
    "boilerplate/package.json",
    JSON.stringify(boilerplatePackage, null, 2)
  );

  await fs.writeFile(
    "boilerplate/tsconfig.json",
    JSON.stringify(boilerplateTsConfig, null, 2)
  );

  await fs.writeFile("boilerplate/.gitignore", boilerplateGitIgnore);

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

/** @param {string} from @param {string} to */
async function copyFolderRecursive(from, to) {
  /** @type {string[]} */
  let files = [];

  const targetFolder = path.join(to, path.basename(from));
  if (!existsSync(targetFolder)) {
    await fs.mkdir(targetFolder);
  }

  if ((await fs.lstat(from)).isDirectory()) {
    files = await fs.readdir(from);

    for (const file of files) {
      const currentSource = path.join(from, file);
      if ((await fs.lstat(currentSource)).isDirectory()) {
        await copyFolderRecursive(currentSource, targetFolder);
      } else {
        await copyFile(currentSource, targetFolder);
      }
    }
  }
}

/** @param {string} from @param {string} to */
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
