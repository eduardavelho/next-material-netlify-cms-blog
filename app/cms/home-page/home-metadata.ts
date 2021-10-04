import type { GetCollectionType } from "@egvelho/next-meta/cms/collection";
import { pageMetadata } from "app/cms/page-metadata";

export type HomeMetadata = GetCollectionType<typeof homeMetadata>;

export const homeMetadata = pageMetadata({
  file: "app/home/home-metadata.json",
});
