import {
  file,
  string,
  list,
  text,
  image,
} from "@egvelho/next-material/netlify-cms/data";

export const cardsData = file({
  file: "app/home/cards-data.json",
  label: "Cartões",
  fields: [
    string({
      label: "Título",
      name: "title",
      required: true,
    }),
    text({
      label: "Subtítulo",
      name: "subtitle",
      required: true,
    }),
    list({
      label: "Cartões",
      labelSingular: "Cartão",
      name: "cards",
      fields: [
        string({
          label: "Título",
          name: "title",
          required: true,
        }),
        text({
          label: "Conteúdo",
          name: "content",
          required: true,
        }),
        string({
          label: "Link",
          name: "href",
          required: true,
        }),
        image({
          label: "Imagem",
          name: "image",
          required: true,
        }),
      ],
    }),
  ],
});
