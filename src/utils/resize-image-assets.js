#!/usr/bin/env node

const { join } = require("path");
const { promises, existsSync } = require("fs");
const fs = promises;
const sharp = require("sharp");

module.exports = { resizeImageAssets };

/** @param {string} inputPath @param {number} size */
async function resizeImagesFromPath(inputPath, size) {
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

async function resizeImageAssets({
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

if (require.main === module) {
  const args = process.argv.slice(2);

  /** @type {string[]} */
  let paths = [];
  let size = undefined;

  args.reduce((previousArg, arg) => {
    if (previousArg === "-size") {
      size = parseInt(arg);
    } else if (arg === "-size") {
    } else {
      paths.push(arg);
    }

    return arg;
  }, "");

  if (!size || paths.length === 0) {
    console.log("Error: you must provide the arguments for size and paths.");
    console.log("Example: resize-image-assets -size 256 path/to/a path/to/b");
  } else {
    resizeImageAssets({ paths, size });
  }
}
