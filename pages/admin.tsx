import { pages } from "app/api";

export { admin as default } from "app/admin/admin";
export const disallow = pages.admin.disallow(true);
