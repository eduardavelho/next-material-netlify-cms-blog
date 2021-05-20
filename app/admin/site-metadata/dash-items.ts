import { links } from "app/api";
import { file, list, select } from "@egvelho/next-material/netlify-cms/data";

const pagesSelect = select({
  name: "page",
  label: "Página",
  required: true,
  options: Object.entries(links).map(([key, item]) => ({
    label: item.longLabel,
    value: key,
  })),
});

export const dashItems = file({
  file: "app/dash/dash-items.json",
  label: "Items da dash",
  fields: [
    list({
      label: "Items da barra superior",
      labelSingular: "Item",
      name: "appBar",
      summary: "page",
      collapsed: true,
      fields: [pagesSelect],
    }),
    list({
      label: "Items do drawer",
      labelSingular: "Item",
      name: "drawer",
      summary: "page",
      collapsed: true,
      fields: [pagesSelect],
    }),
    list({
      label: "Items da navegação inferior",
      labelSingular: "Item",
      name: "bottomNavigation",
      summary: "page",
      collapsed: true,
      fields: [pagesSelect],
    }),
    list({
      label: "Items do rodapé",
      labelSingular: "Item",
      name: "footer",
      summary: "page",
      collapsed: true,
      fields: [pagesSelect],
    }),
  ],
});
