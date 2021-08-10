import {
  collectionFile,
  GetCollectionType,
} from "@egvelho/next-material/netlify-cms/collection";

export type CardsData = GetCollectionType<typeof cardsData>;

export const cardsData = collectionFile({
  file: "app/home/cards-data.json",
  label: "Cartões",
}).fields((data) => {
  return {
    title: data.string({
      label: "Título",
    }),
    subtitle: data.text({
      label: "Subtítulo",
    }),
    cards: data
      .list({
        label: "Cartões",
        labelSingular: "Cartão",
        summary: "{{fields.title}}",
      })
      .fields({
        title: data.string({
          label: "Título",
        }),
        content: data.text({
          label: "Conteúdo",
        }),
        href: data.string({
          label: "Link",
        }),
        image: data.image({
          label: "Imagem",
        }),
      }),
  };
});
