import { files } from "@egvelho/next-material/netlify-cms/data";
import { items } from "app/home/items-data.json";
import { homeItems } from "./home-items/home-items";
import { homeMetadata } from "./home-metadata";
import { homeItemsData } from "./home-items/home-items-data";

export const homePage = files({
  label: "Home",
  files: [
    homeMetadata,
    homeItemsData,
    ...items.map(
      ({ item }) => homeItems[(item as any) as keyof typeof homeItems]
    ),
  ],
});
