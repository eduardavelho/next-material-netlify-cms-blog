import { collectionFiles } from "@egvelho/next-material/netlify-cms/collection";
import { blogMetadata } from "./blog-metadata";
import { blogStyle } from "./blog-style";

export const blogPage = collectionFiles({
  label: "Blog",
  collections: [blogMetadata, blogStyle],
});
