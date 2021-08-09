import { CmsCollection } from "netlify-cms-core";
import { siteMetadata } from "./site-metadata/site-metadata";
import { homePage } from "./home-page/home-page";
import { blogPage } from "./blog-page/blog-page";
import { blogPost } from "./blog-post";

export const netlifyCmsConfig: CmsCollection[] = [
  siteMetadata,
  homePage,
  blogPage,
  blogPost.collection,
];
