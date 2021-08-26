import { env } from "app/env";
import { generateAssets } from "tropicalia/utils/generate-assets";
import { generateSitemap } from "tropicalia/utils/generate-sitemap";
import { resizeImageAssets } from "tropicalia/utils/resize-image-assets";

export async function scripts() {
  const loadedEnv = env();
  const outPath = "public";

  if (loadedEnv.nodeEnv === "production" || loadedEnv.runScriptsInDevelopment) {
    await Promise.all([
      loadedEnv.generateAssetsOnBuild
        ? generateAssets({ appPath: "app.json", outPath })
        : undefined,
      loadedEnv.resizeImageAssetsOnBuild
        ? resizeImageAssets({
            paths: [".next/static/images", "public/images"],
            size: 640,
          })
        : undefined,
      generateSitemap({
        mapPathToImport: (path) => import(`pages/${path}`),
        outPath,
      }),
    ]);
  }
}
