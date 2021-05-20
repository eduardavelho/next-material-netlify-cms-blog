export async function generateAssets({
  appPath = "app.json",
  outPath = "public",
}: {
  appPath?: string;
  outPath?: string;
} = {}) {
  if (typeof window !== "undefined") {
    return;
  }

  console.log("Generating meta assets...");

  const favicons = eval('require("favicons")');
  const fs = eval('require("fs")');

  if (!fs.existsSync(appPath)) {
    console.log(`Error: the path "${appPath}" does not exists.`);
    return;
  }

  if (!fs.existsSync(outPath)) {
    console.log(`Creating path "${outPath}"...`);
    fs.mkdirSync(outPath);
  }

  const path = eval('require("path")');
  const app = JSON.parse(fs.readFileSync(appPath));

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

  async function callback(error: Error, response: any) {
    if (error) {
      console.error(error.message);
      return;
    }

    [...response.images, ...response.files].forEach(({ name, contents }) => {
      console.log(`Writing to ${outPath}/${name}...`);
      fs.writeFileSync(path.join(outPath, name), contents, "binary");
    });
  }

  await new Promise((resolve) =>
    favicons(
      app.iconPath,
      configuration,
      async (...args: Parameters<typeof callback>) => {
        resolve(await callback(...args));
      }
    )
  );

  console.log("Assets generation success!");
}
