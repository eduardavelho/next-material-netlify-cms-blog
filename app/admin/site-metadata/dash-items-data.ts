import { links } from "app/api";
import { collectionFile } from "@egvelho/next-material/netlify-cms/collection";

export const dashItemsData = collectionFile({
  file: "app/dash/dash-items.json",
  label: "Itens da dash",
}).fields((data) => {
  const pagesSelect = data.selectOne({
    label: "Página",
    options: Object.keys(links).map((key) => ({
      label: links[key as keyof typeof links].longLabel,
      value: key,
    })),
  });

  return {
    appBar: data
      .list({
        label: "Itens da barra superior",
        labelSingular: "Item",
        summary: "Item",
        collapsed: false,
      })
      .fields({
        page: pagesSelect,
      }),
    drawer: data
      .list({
        label: "Itens do drawer",
        labelSingular: "Item",
        summary: "Item",
        collapsed: false,
      })
      .fields({
        page: pagesSelect,
      }),
    bottomNavigation: data
      .list({
        label: "Itens da navegação inferior",
        labelSingular: "Item",
        summary: "Item",
        collapsed: false,
      })
      .fields({
        page: pagesSelect,
      }),
    footer: data
      .list({
        label: "Itens do rodapé",
        labelSingular: "Item",
        summary: "Item",
        collapsed: false,
      })
      .fields({
        page: pagesSelect,
      }),
  };
});
