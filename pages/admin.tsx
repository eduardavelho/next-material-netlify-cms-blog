import { pages } from "app/url";

export { admin as default } from "app/admin/admin";
export const disallow = pages.admin.disallow(true);
