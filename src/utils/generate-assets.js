#!/usr/bin/env node

const path = require("path");
const { promises, existsSync } = require("fs");
const fs = promises;
const favicons = require("favicons");

module.exports = { generateAssets };

async function generateAssets({
  appPath = "app.json",
  outPath = "public",
} = {}) {
  console.log("Generating meta assets...");

  if (!existsSync(appPath)) {
    console.log(`Error: the path "${appPath}" does not exists.`);
    return;
  }

  if (!existsSync(outPath)) {
    console.log(`Creating path "${outPath}"...`);
    await fs.mkdir(outPath);
  }

  const app = JSON.parse((await fs.readFile(appPath)).toString());

  const requiredKeys = [
    "name",
    "shortName",
    "description",
    "lang",
    "twitterAt",
    "facebookAppId",
    "iconPath",
    "version",
    "developerName",
    "developerURL",
    "backgroundColor",
    "dashColor",
    "primaryColor",
    "secondaryColor",
    "orientation",
  ];

  const notFoundKeys = Object.keys(app).filter(
    (key) => requiredKeys.includes(key) === false
  );

  if (notFoundKeys.length > 0) {
    console.log(
      `Error: the following keys are required in "${appPath}": ${notFoundKeys
        .reduce((stack, item) => `${stack}"${item}", `, "")
        .slice(0, -2)}.`
    );
    return;
  }

  /** @type {favicons.FaviconOptions} */
  const configuration = {
    path: "/",
    appName: app.name,
    appShortName: app.shortName,
    appDescription: app.description,
    developerName: app.developerName,
    developerURL: app.developerURL,
    dir: "auto",
    lang: app.lang,
    background: app.backgroundColor,
    theme_color: app.dashColor,
    appleStatusBarStyle: "default",
    display: "standalone",
    orientation: app.orientation,
    scope: "/",
    start_url: "/",
    version: app.version,
    logging: false,
    pixel_art: false,
    loadManifestWithCredentials: false,
    pipeHTML: false,
    manifestRelativePaths: false,
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      coast: false,
      favicons: true,
      firefox: true,
      windows: true,
      yandex: false,
    },
  };

  /** @type {favicons.FaviconCallback} */
  const callback = async (error, response) => {
    if (error) {
      console.error(error.message);
      return;
    }

    console.log(`Writing to ${outPath}/${app.iconPath}...`);
    await fs.copyFile(app.iconPath, `${outPath}/${app.iconPath}`);

    await Promise.all(
      [...response.images, ...response.files].map(
        async ({ name, contents }) => {
          console.log(`Writing to ${outPath}/${name}...`);
          return await fs.writeFile(
            path.join(outPath, name),
            contents,
            "binary"
          );
        }
      )
    );
  };

  await new Promise((resolve) =>
    favicons(app.iconPath, configuration, async (...args) => {
      resolve(await callback(...args));
    })
  );

  console.log("Assets generation success!");
}

if (require.main === module) {
  const [appPath, outPath] = process.argv.slice(2);

  if (!appPath || !outPath) {
    console.log(
      "Error: you must provide the arguments for input and output path."
    );
    console.log("Example: generate-assets path/to/app.json path/to/out/folder");
  } else {
    generateAssets({ appPath, outPath });
  }
}
