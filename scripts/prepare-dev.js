const fs = require("fs");

function prepareDev() {
  fs.copyFileSync("template/app.json", "app.json");
  fs.copyFileSync("template/babel.config.dev.js", "babel.config.js");
  fs.copyFileSync("template/next.config.dev.js", "next.config.js");
  fs.copyFileSync("template/next-env-d.ts", "next-env.d.ts");
}

prepareDev();
