import loadEnv from "app/env";
import {
  generateAssets,
  generateSitemap,
  loadFirebase,
} from "@egvelho/next-material-components";

export default async function scripts() {
  const env = loadEnv();
  const outPath = "public";

  if (env.nodeEnv === "production") {
    await Promise.all([
      env.generateAssetsOnBuild &&
        generateAssets({ appPath: "app.json", outPath }),
      loadFirebase({ outPath }),
      generateSitemap({
        mapPathToImport: (path) => import(`pages/${path}`),
        outPath,
      }),
    ]);
  }
}
