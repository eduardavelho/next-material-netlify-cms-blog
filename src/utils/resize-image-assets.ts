let fs: any, join: any, sharp: any;

async function resizeImagesFromPath(inputPath: string, size: number) {
  const paths = fs.readdirSync(inputPath, { withFileTypes: true });

  await Promise.all(
    paths.map(async (path: any) => {
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

        fs.writeFileSync(fullPath, buffer);
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

  fs = eval('require("fs")');
  join = eval('require("path")').join;
  sharp = eval('require("sharp")');

  sharp.cache(false);
  sharp.simd(false);

  await Promise.all(paths.map((path) => resizeImagesFromPath(path, size)));

  console.log("Resizing success!");
}
