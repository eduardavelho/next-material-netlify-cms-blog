import { pages } from "app/url";

export { cms as default } from "app/cms/cms";
export const disallow = pages.cms.disallow(true);
