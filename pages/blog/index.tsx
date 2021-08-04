import { pages, PostType } from "app/api";
import { env } from "app/env";
import fs from "fs";
import * as netlifyCmsUtils from "@egvelho/next-material/netlify-cms/utils";

export { Blog as default } from "app/blog/blog";

const postsPath = "app/blog/posts";
const postsApiPath = "public/static-api/posts";

export const getStaticProps = pages.blog.getStaticProps(async () => {
  const posts = await netlifyCmsUtils.getItems<PostType>(postsPath);

  const postsChunks = await netlifyCmsUtils.chunkItems(posts, env().pagination);

  await netlifyCmsUtils.emptyFolder(postsApiPath);
  await netlifyCmsUtils.writeChunks(postsApiPath, postsChunks);

  return {
    postsLength: posts.length,
    posts: posts
      .slice(0, env().pagination)
      .map(({ data: { content, ...data }, slug }) => ({
        ...data,
        slug,
      })),
  };
});

export const priority = pages.index.priority(0.5);
export const disallow = pages.index.disallow(false);
export const changeFrequency = pages.index.changeFrequency("daily");
export const getLastModificationDate = pages.index.getLastModificationDate(
  async () => new Date()
);
