import { NetlifyCms } from "@egvelho/next-material/netlify-cms/netlify-cms";
import { lang } from "app.json";
import { pages } from "app/api";
import { siteMetadata } from "./site-metadata/site-metadata";
import { homePage } from "./home-page/home-page";
import { blogPage } from "./blog-page/blog-page";
import { blogPost } from "./blog-post";

export const admin = pages.admin.page(() => {
  return (
    <NetlifyCms
      locale={lang}
      backend={{
        name: "git-gateway",
      }}
      collections={[siteMetadata, homePage, blogPage, blogPost.collection]}
    />
  );
});
