import * as collectionUtils from "tropicalia/cms/collection-utils";
import { pages } from "app/url";
import { env } from "app/env";
import paths from "app/admin/paths.json";
import type { BlogPost } from "app/admin/blog-post";

export { Blog as default } from "app/blog/blog";

export const getStaticProps = pages.blog.getStaticProps(
  async ({ tag } = {}) => {
    if (tag === undefined) {
      return writeChunksThenGetAllPosts();
    } else {
      return writePostsForTagThenGet(tag);
    }
  }
);

async function writeChunksThenGetAllPosts() {
  const posts = await getAllPosts();
  const tags = [...new Set(posts.map(({ data: { tags } }) => tags).flat())];

  await collectionUtils.createFolderIfNotExists(paths.postsApi);

  const postsChunks = await collectionUtils.chunkItems(posts, env().pagination);
  const postsApiPath = await collectionUtils.useCollectionFolder(
    paths.postsApi
  );

  await collectionUtils.deleteFilesThenRecreateFolder(postsApiPath);
  await collectionUtils.writeChunksToFolder(postsApiPath, postsChunks);

  return {
    tags,
    postsLength: posts.length,
    posts: posts
      .slice(0, env().pagination)
      .map(({ data: { content, ...data }, slug }) => ({
        ...data,
        slug,
      })),
  };
}

async function writePostsForTagThenGet(initialTag: string) {
  const posts = await getAllPosts();
  const allTags = [...new Set(posts.map(({ data: { tags } }) => tags).flat())];

  const tagsMap = allTags.reduce((stack, tag) => {
    stack[collectionUtils.slugify(tag)] = tag;
    return stack;
  }, {} as { [key: string]: string });

  const postsForTag = posts.filter(({ data: { tags } }) =>
    tags.includes(tagsMap[initialTag])
  );

  await collectionUtils.createFolderIfNotExists(paths.postsByTag);

  const tagPath = await collectionUtils.useCollectionFile(
    `${paths.postsByTag}/${initialTag}.json`,
    { doNotCheckIfExists: true }
  );

  await collectionUtils.writeItemsToFile(tagPath, postsForTag);

  const tags = [
    ...new Set(postsForTag.map(({ data: { tags } }) => tags).flat()),
  ];

  return {
    tags,
    initialTag: tagsMap[initialTag],
    postsLength: postsForTag.length,
    posts: postsForTag.map(({ data: { content, ...data }, slug }) => ({
      ...data,
      slug,
    })),
  };
}

async function getAllPosts() {
  const postsPath = await collectionUtils.useCollectionFolder(paths.posts);
  const posts = await collectionUtils.getCollectionFolder<BlogPost>(postsPath);
  const sortByMostRecentPosts = collectionUtils.sortByMostRecent<BlogPost>(
    ({ data: { publishDate } }) => new Date(publishDate ?? 0)
  );

  return posts.sort(sortByMostRecentPosts);
}

export const priority = pages.index.priority(0.5);
export const disallow = pages.index.disallow(false);
export const changeFrequency = pages.index.changeFrequency("daily");
export const getLastModificationDate = pages.index.getLastModificationDate(
  async () => new Date()
);
