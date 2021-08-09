import { collectionFolder } from "@egvelho/next-material/netlify-cms/collection";

export const blogPost = collectionFolder({
  folder: "app/blog/posts",
  label: "Publicações do blog",
  labelSingular: "Publicação",
  slug: "{{title}}",
  sortableFields: ["publishDate"],
}).fields((data) => ({
  title: data.string({
    label: "Título",
  }),
  description: data.string({
    label: "Descrição",
  }),
  image: data.image({
    label: "Imagem",
  }),
  publishDate: data.datetime<"optional">({
    label: "Data de publicação",
    dateFormat: "MM/YYYY",
    timeFormat: "HH:mm",
    required: false,
  }),
  tags: data.keywords({
    label: "Tags",
    min: 1,
    max: 5,
  }),
  authorName: data.string<"optional">({
    label: "Nome do autor",
    required: false,
  }),
  authorDescription: data.string<"optional">({
    label: "Descrição do autor",
    required: false,
  }),
  authorPicture: data.image<"optional">({
    label: "Foto do autor",
    required: false,
  }),
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
  content: data.markdown({
    label: "Conteúdo",
  }),
}));
