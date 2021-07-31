import { pages } from "app/api";

export { Home as default } from "app/home/home";

export const priority = pages.index.priority(0.7);
export const disallow = pages.index.disallow(false);
export const changeFrequency = pages.index.changeFrequency("daily");
export const getLastModificationDate = pages.index.getLastModificationDate(
  async () => new Date()
);
