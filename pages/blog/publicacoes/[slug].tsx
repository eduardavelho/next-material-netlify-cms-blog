import * as netlifyCmsUtils from "@egvelho/next-material/netlify-cms/utils";
import { pages } from "app/api";

type PostProps = Parameters<Parameters<typeof pages.post.page>[0]>[0];

export { Post as default } from "app/blog/post";

export const getStaticPaths = pages.post.getStaticPaths(async () => {
  const slugs = netlifyCmsUtils.getSlugs("app/blog/posts");
  return slugs.map((slug) => ({ slug }));
});

export const getStaticProps = pages.post.getStaticProps(async (query) => {
  const { data, slug } = await netlifyCmsUtils.getItem<
    Omit<PostProps, "tags"> & { tags: string[] }
  >(`app/blog/posts/${query.slug}.json`);
  return {
    ...data,
    slug,
    tags: (data.tags ?? []).map((tag, key) => ({ tag, key })),
    content: await netlifyCmsUtils.markdownToHtml(data.content ?? ""),
  };
});

export const priority = pages.post.priority(0.5);
export const disallow = pages.post.disallow(false);
export const changeFrequency = pages.post.changeFrequency("daily");
export const getLastModificationDate = pages.post.getLastModificationDate(
  async () => new Date()
);
