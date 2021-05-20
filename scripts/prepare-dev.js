const fs = require("fs");

function prepareDev() {
  console.log("Preparing for development...");

  if (!fs.existsSync("public")) {
    console.log("Creating public folder...");
    fs.mkdirSync("public");
  }

  console.log("Copying template files...");
  fs.copyFileSync("template/app.json", "app.json");
  fs.copyFileSync("template/icon.svg", "icon.svg");
  fs.copyFileSync("template/babel.config.dev.js", "babel.config.js");
  fs.copyFileSync("template/next.config.dev.js", "next.config.js");
  fs.copyFileSync("template/next-env.d.ts", "next-env.d.ts");

  console.log(
    'Preparing success! Now, you must exec "npm run generate-assets".'
  );
}

prepareDev();
