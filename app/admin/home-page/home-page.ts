import { files } from "@egvelho/next-material/netlify-cms/data";
import { homeMetadata } from "./home-metadata";
import { bannerData } from "./banner-data";

export const homePage = files({
  label: "Home",
  files: [homeMetadata, bannerData],
});
