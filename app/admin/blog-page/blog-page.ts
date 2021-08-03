import { files } from "@egvelho/next-material/netlify-cms/data";
import { blogMetadata } from "./blog-metadata";
import { blogStyle } from "./blog-style";

export const blogPage = files({
  label: "Blog",
  files: [blogMetadata, blogStyle],
});
