import { pages, PostType } from "app/api";
import * as netlifyCmsUtils from "@egvelho/next-material/netlify-cms/utils";

export { Blog as default } from "app/blog/blog";

export const getStaticProps = pages.blog.getStaticProps(async () => {
  const posts = await netlifyCmsUtils.getItems<
    Omit<PostType, "tags" | "content" | "slug"> & {
      tags: string[];
    }
  >("app/blog/posts");

  return {
    posts: posts.map(({ data, slug }) => ({
      ...data,
      slug,
      tags: data.tags.map((tag, key) => ({ tag, key })),
    })),
  };
});

export const priority = pages.index.priority(0.5);
export const disallow = pages.index.disallow(false);
export const changeFrequency = pages.index.changeFrequency("daily");
export const getLastModificationDate = pages.index.getLastModificationDate(
  async () => new Date()
);
