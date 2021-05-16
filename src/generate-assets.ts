export async function generateAssets({
  appPath = "app.json",
  outPath = "public.json",
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
  const path = eval('require("path")');
  const app = JSON.parse(fs.readFileSync(appPath));
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
