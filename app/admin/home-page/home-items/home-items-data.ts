import { collectionFile } from "@egvelho/next-material/netlify-cms/collection";
import { homeItems } from "./home-items";

export const homeItemsData = collectionFile({
  file: "app/home/items-data.json",
  label: "Itens da home",
}).fields((data) => {
  return {
    items: data
      .list({
        label: "Itens",
        labelSingular: "Item",
        summary: "Item",
        collapsed: false,
      })
      .fields({
        item: data.selectOne({
          label: "Item",
          options: Object.keys(homeItems).map((key) => ({
            label:
              homeItems[key as keyof typeof homeItems].collectionFile.label,
            value: key,
          })),
        }),
      }),
  };
});
