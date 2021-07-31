import { file, list, select } from "@egvelho/next-material/netlify-cms/data";
import { homeItems } from "./home-items";

const itemsSelect = select({
  name: "item",
  label: "Item",
  required: true,
  options: Object.entries(homeItems).map(([key, item]) => ({
    label: item.label,
    value: key,
  })),
});

export const homeItemsData = file({
  file: "app/home/items-data.json",
  label: "Itens da home",
  fields: [
    list({
      label: "Itens",
      labelSingular: "Item",
      name: "items",
      summary: "Item",
      collapsed: false,
      fields: [itemsSelect],
    }),
  ],
});
