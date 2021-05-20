import { files } from "@egvelho/next-material/netlify-cms/data";
import { homeMetadata } from "./home-metadata";
import { bannerData } from "./banner-data";
import { cardsData } from "./cards-data";
import { itemsData } from "./items-data";
import { bannerWithButtonData } from "./banner-with-button-data";
import { contactFormData } from "./contact-form-data";

export const homePage = files({
  label: "Home",
  files: [
    homeMetadata,
    bannerData,
    cardsData,
    itemsData,
    bannerWithButtonData,
    contactFormData,
  ],
});
