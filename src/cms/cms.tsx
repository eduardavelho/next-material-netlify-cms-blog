import React from "react";
import { getCmsConfig, CmsConfig } from "./get-cms-config";

const netlifyCmsScript: string = require("!!raw-loader!netlify-cms/dist/netlify-cms.js")
  .default;

async function loadNetlifyCms(config: CmsConfig) {
  if (document.querySelector("#nc-root") !== null) {
    return;
  }

  (window as any).CMS_MANUAL_INIT = true;

  const root = document.createElement("div");
  const style = document.createElement("style");
  let script = document.createElement("script");

  root.id = "nc-root";
  document.body.appendChild(root);

  style.id = "nc-root-style";
  style.innerHTML =
    "body > *:not(#nc-root):not(.ReactModalPortal) { display: none; }";
  document.head.appendChild(style);

  script = document.createElement("script");
  script.id = "nc-root-load-cms";
  script.innerHTML = netlifyCmsScript;
  document.body.appendChild(script);

  while ((window as any).initCMS === undefined) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  script = document.createElement("script");
  script.id = "nc-root-init-cms";
  script.innerHTML = `window.initCMS(${JSON.stringify(getCmsConfig(config))})`;
  document.body.appendChild(script);
}

export function Cms(config: CmsConfig) {
  React.useEffect(() => {
    loadNetlifyCms(config);

    return () => {
      document.querySelector("#nc-root")?.remove();
      document.querySelector("#nc-root-style")?.remove();
      document.querySelector("#nc-root-load-cms")?.remove();
      document.querySelector("#nc-root-init-cms")?.remove();
    };
  }, []);

  return null;
}
