import { Cms } from "tropicalia/cms/cms";
import app from "app.json";
import { pages } from "app/url";
import { siteMetadata } from "./site-metadata/site-metadata";
import { homePage } from "./home-page/home-page";
import { blogPage } from "./blog-page/blog-page";
import { blogPost } from "./blog-post";

export const cms = pages.cms.page(() => {
  return (
    <Cms
      locale={app.lang}
      backend={{
        name: "test-repo",
      }}
      collections={[siteMetadata, homePage, blogPage, blogPost.collection]}
    />
  );
});
