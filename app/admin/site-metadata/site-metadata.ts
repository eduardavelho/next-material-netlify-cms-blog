import { files } from "@egvelho/next-material/netlify-cms/data";
import { appMetadata } from "./app-metadata";
import { dashColorsData } from "./dash-colors-data";
import { dashItemsData } from "./dash-items-data";

export const siteMetadata = files({
  label: "Geral",
  files: [appMetadata, dashColorsData, dashItemsData],
});
