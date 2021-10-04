import {
  collectionFile,
  GetCollectionType,
} from "@egvelho/next-meta/cms/collection";

export type DescriptionData = GetCollectionType<typeof descriptionData>;

export const descriptionData = collectionFile({
  file: "app/home/description-data.json",
  label: "Descrição",
}).fields((data) => ({
  title: data.string({
    label: "Título",
  }),
  titleColor: data.color({
    label: "Cor do título",
    allowInput: true,
  }),
  backgroundColor: data.color<"optional">({
    label: "Cor de fundo",
    required: false,
    allowInput: true,
  }),
  backgroundImage: data.image<"optional">({
    label: "Imagem de fundo",
    required: false,
  }),
  items: data
    .list({
      label: "Items",
      labelSingular: "Item",
      summary: "image",
    })
    .fields({
      text: data.text({
        label: "Texto",
      }),
      image: data.image({
        label: "Imagem",
      }),
    }),
}));
