import { pages } from "app/api";

export { Blog as default } from "app/blog/blog";

export const priority = pages.index.priority(0.5);
export const disallow = pages.index.disallow(false);
export const changeFrequency = pages.index.changeFrequency("daily");
export const getLastModificationDate = pages.index.getLastModificationDate(
  async () => new Date()
);
