import type { GetCollectionType } from "@egvelho/next-material/netlify-cms/collection";
import { pageMetadata } from "app/admin/page-metadata";

export type BlogMetadata = GetCollectionType<typeof blogMetadata>;

export const blogMetadata = pageMetadata({
  file: "app/blog/blog-metadata.json",
});
