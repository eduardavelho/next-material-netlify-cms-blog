import {
  folder,
  color,
  image,
  string,
  keywords,
  datetime,
  markdown,
} from "@egvelho/next-material/netlify-cms/data";

export const blogStyle = folder({
  folder: "app/blog/posts",
  label: "Publicações",
  labelSingular: "Publicação",
  slug: "{{title}}",
  sortableFields: ["publishDate"],
  fields: [
    string({
      label: "Título",
      name: "title",
      required: true,
    }),
    string({
      label: "Descrição",
      name: "description",
      required: true,
    }),
    image({
      label: "Imagem",
      name: "image",
      required: true,
    }),
    datetime({
      name: "publishDate",
      label: "Data",
      dateFormat: "MM/YYYY",
      timeFormat: "HH:mm",
      required: false,
    }),
    keywords({
      label: "Tags",
      name: "keywords",
      min: 1,
      max: 5,
    }),
    string({
      label: "Nome do autor",
      name: "authorName",
      required: false,
    }),
    string({
      label: "Descrição do autor",
      name: "authorDescription",
      required: false,
    }),
    image({
      label: "Foto do autor",
      name: "authorPicture",
      required: false,
    }),
    color({
      label: "Cor do texto",
      name: "color",
      required: false,
      allowInput: true,
    }),
    color({
      label: "Cor de fundo",
      name: "backgroundColor",
      required: false,
      allowInput: true,
    }),
    image({
      label: "Imagem de fundo",
      name: "backgroundImage",
      required: false,
    }),
    markdown({
      label: "Conteúdo",
      name: "content",
      required: true,
    }),
  ],
});
