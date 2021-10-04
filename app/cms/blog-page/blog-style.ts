import {
  collectionFile,
  GetCollectionType,
} from "@egvelho/next-meta/cms/collection";

export type BlogStyle = GetCollectionType<typeof blogStyle>;

export const blogStyle = collectionFile({
  file: "app/blog/blog-style.json",
  label: "Estilo do blog",
}).fields((data) => ({
  color: data.color<"optional">({
    label: "Cor do texto",
    required: false,
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
}));
