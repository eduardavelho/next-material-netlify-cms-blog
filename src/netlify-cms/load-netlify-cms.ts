import { CmsConfig, CmsCollection } from "netlify-cms-core";
import { getNetlifyCmsConfig } from "./get-netlify-cms-config";

export async function loadNetlifyCms(collections: CmsCollection[]) {
  if (document.querySelector("#nc-root") !== null) {
    window.location.reload();
    return;
  }

  (window as any).CMS_MANUAL_INIT = true;

  const html = document.querySelector("html");

  html &&
    (html.innerHTML = `<!doctype html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Content Manager</title><style>#nc-root span[class*="CustomIconWrapper"] img[alt="Logo"] { display: block; margin-left: auto; margin-right: auto; }</style></head><body></body></html>`);

  let script = document.createElement("script");
  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
  document.body.appendChild(script);

  while ((window as any).netlifyIdentity === undefined) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  script = document.createElement("script");
  script.src = "https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js";
  document.body.appendChild(script);

  while ((window as any).initCMS === undefined) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  script = document.createElement("script");
  script.innerHTML = `window.netlifyIdentity.on("logout", function() { document.body.innerHTML = ""; document.location.href = "/"; }); window.initCMS(${JSON.stringify(
    getNetlifyCmsConfig(collections)
  )})`;
  document.body.appendChild(script);
}
