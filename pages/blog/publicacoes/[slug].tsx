import * as collectionUtils from "@egvelho/next-material/netlify-cms/collection-utils";
import { pages } from "app/api";
import paths from "app/admin/paths.json";
import type { BlogPost } from "app/admin/blog-post";

export { Post as default } from "app/blog/post";

export const getStaticPaths = pages.post.getStaticPaths(async () => {
  const postsPath = await collectionUtils.useCollectionFolder(paths.posts);
  const slugs = await collectionUtils.getSlugs(postsPath);
  return slugs.map((slug) => ({ slug }));
});

export const getStaticProps = pages.post.getStaticProps(async (query) => {
  const postPath = await collectionUtils.useCollectionFile(
    `${paths.posts}/${query.slug}.json`
  );

  const { data, slug } = await collectionUtils.getCollectionFile<BlogPost>(
    postPath
  );

  return {
    ...data,
    slug,
    content: await collectionUtils.markdownToHtml(data.content ?? ""),
  };
});

export const priority = pages.post.priority(0.5);
export const disallow = pages.post.disallow(false);
export const changeFrequency = pages.post.changeFrequency("daily");
export const getLastModificationDate = pages.post.getLastModificationDate(
  async () => new Date()
);
