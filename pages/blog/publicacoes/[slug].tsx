import * as netlifyCmsUtils from "@egvelho/next-material/netlify-cms/utils";
import { pages, PostType } from "app/api";

export { Post as default } from "app/blog/post";

const postsPath = "app/blog/posts";

export const getStaticPaths = pages.post.getStaticPaths(async () => {
  const slugs = netlifyCmsUtils.getSlugs(postsPath);
  return slugs.map((slug) => ({ slug }));
});

export const getStaticProps = pages.post.getStaticProps(async (query) => {
  const { data, slug } = await netlifyCmsUtils.getItem<PostType>(
    `${postsPath}/${query.slug}.json`
  );
  return {
    ...data,
    slug,
    content: await netlifyCmsUtils.markdownToHtml(data.content ?? ""),
  };
});

export const priority = pages.post.priority(0.5);
export const disallow = pages.post.disallow(false);
export const changeFrequency = pages.post.changeFrequency("daily");
export const getLastModificationDate = pages.post.getLastModificationDate(
  async () => new Date()
);
