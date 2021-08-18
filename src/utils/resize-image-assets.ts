import { join } from "path";
import { promises as fs, existsSync } from "fs";
import sharp from "sharp";

async function resizeImagesFromPath(inputPath: string, size: number) {
  const paths = await fs.readdir(inputPath, { withFileTypes: true });

  await Promise.all(
    paths.map(async (path) => {
      const fullPath = join(inputPath, path.name);
      if (path.isDirectory()) {
        console.log(`Entering in ${fullPath}...`);
        await resizeImagesFromPath(fullPath, size);
      } else if (
        [".jpg", ".jpeg", ".png"].some((extension) =>
          path.name.endsWith(extension)
        )
      ) {
        const buffer = await sharp(fullPath)
          .resize(size, size, {
            fit: "inside",
            withoutEnlargement: true,
          })
          .toBuffer();

        await fs.writeFile(fullPath, buffer);
        console.log(`Resizing ${fullPath} to fit ${size}x${size}`);
      }
    })
  );
}

export async function resizeImageAssets({
  paths = ["public/images", ".next/static/images"],
  size = 960,
}) {
  console.log("Starting image resize process...");
  const notFoundPaths = paths.filter((path) => existsSync(path) === false);

  if (notFoundPaths.length > 0) {
    console.log(
      `Error: the paths ${notFoundPaths
        .reduce((stack, item) => `${stack}"${item}", `, "")
        .slice(0, -2)} are not found.`
    );
    return;
  }

  sharp.cache(false);
  sharp.simd(false);

  await Promise.all(paths.map((path) => resizeImagesFromPath(path, size)));
  console.log("Resizing success!");
}
