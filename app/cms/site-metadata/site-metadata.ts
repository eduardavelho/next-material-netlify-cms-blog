import { collectionFiles } from "tropicalia/cms/collection";
import { appMetadata } from "./app-metadata";
import { dashColorsData } from "./dash-colors-data";
import { dashItemsData } from "./dash-items-data";

export const siteMetadata = collectionFiles({
  label: "Geral",
  collections: [appMetadata, dashColorsData, dashItemsData],
});
