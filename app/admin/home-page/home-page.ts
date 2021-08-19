import { collectionFiles } from "@egvelho/next-material/netlify-cms/collection";
import itemsData from "app/home/items-data.json";
import { homeItems } from "./home-items/home-items";
import { homeMetadata } from "./home-metadata";
import { homeItemsData } from "./home-items/home-items-data";

export const homePage = collectionFiles({
  label: "Home",
  collections: [
    homeMetadata,
    homeItemsData,
    ...itemsData.items.map(
      ({ item }) => homeItems[item as keyof typeof homeItems]
    ),
  ],
});
