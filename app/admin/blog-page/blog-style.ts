import { file, color, image } from "@egvelho/next-material/netlify-cms/data";

export const blogStyle = file({
  file: "app/blog/blog-style.json",
  label: "Estilo do blog",
  fields: [
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
  ],
});
