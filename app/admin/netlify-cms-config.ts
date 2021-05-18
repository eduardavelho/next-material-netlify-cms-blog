import { CmsCollection } from "netlify-cms-core";
import { siteMetadata } from "./site-metadata/site-metadata";
import { homePage } from "./home-page/home-page";

export const netlifyCmsConfig = [siteMetadata, homePage] as CmsCollection[];
