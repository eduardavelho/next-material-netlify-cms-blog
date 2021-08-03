import { CmsCollection } from "netlify-cms-core";
import { siteMetadata } from "./site-metadata/site-metadata";
import { homePage } from "./home-page/home-page";
import { blogPage } from "./blog-page/blog-page";

export const netlifyCmsConfig = [
  siteMetadata,
  homePage,
  blogPage,
] as CmsCollection[];
