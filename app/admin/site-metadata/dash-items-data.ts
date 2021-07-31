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

export const dashItemsData = file({
  file: "app/dash/dash-items.json",
  label: "Itens da dash",
  fields: [
    list({
      label: "Itens da barra superior",
      labelSingular: "Item",
      name: "appBar",
      summary: "Item",
      collapsed: false,
      fields: [pagesSelect],
    }),
    list({
      label: "Itens do drawer",
      labelSingular: "Item",
      name: "drawer",
      summary: "Item",
      collapsed: false,
      fields: [pagesSelect],
    }),
    list({
      label: "Itens da navegação inferior",
      labelSingular: "Item",
      name: "bottomNavigation",
      summary: "Item",
      collapsed: false,
      fields: [pagesSelect],
    }),
    list({
      label: "Itens do rodapé",
      labelSingular: "Item",
      name: "footer",
      summary: "Item",
      collapsed: false,
      fields: [pagesSelect],
    }),
  ],
});
