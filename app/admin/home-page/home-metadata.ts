import type { GetCollectionType } from "@egvelho/next-material/netlify-cms/collection";
import { pageMetadata } from "app/admin/page-metadata";

export type HomeMetadata = GetCollectionType<typeof homeMetadata>;

export const homeMetadata = pageMetadata({
  file: "app/home/home-metadata.json",
});
