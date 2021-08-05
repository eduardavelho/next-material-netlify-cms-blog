import { pages, PostType } from "app/api";
import { slugify } from "@egvelho/next-material/utils/slugify";
import * as netlifyCmsUtils from "@egvelho/next-material/netlify-cms/utils";

export {
  default,
  getStaticProps,
  changeFrequency,
  disallow,
  getLastModificationDate,
  priority,
} from "./index";

const postsPath = "app/blog/posts";

export const getStaticPaths = pages.blog.getStaticPaths(async () => {
  const posts = await netlifyCmsUtils.getItems<PostType>(postsPath);
  const tags = [...new Set(posts.map(({ data: { tags } }) => tags).flat())];

  return tags.map((tag) => ({ tag: slugify(tag) }));
});
