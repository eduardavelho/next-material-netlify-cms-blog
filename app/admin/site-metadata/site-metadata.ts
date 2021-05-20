import { files } from "@egvelho/next-material/netlify-cms/data";
import { appMetadata } from "./app-metadata";
import { dashColorsData } from "./dash-colors-data";
import { dashItems } from "./dash-items";

export const siteMetadata = files({
  label: "Geral",
  files: [appMetadata, dashColorsData, dashItems],
});
