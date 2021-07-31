import {
  file,
  string,
  color,
  image,
  boolean,
} from "@egvelho/next-material/netlify-cms/data";

export const bannerWithButtonData = file({
  file: "app/home/banner-with-button-data.json",
  label: "Banner com botão",
  fields: [
    string({
      label: "Título",
      name: "title",
      required: true,
    }),
    string({
      label: "Rótulo do botão",
      name: "label",
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
    color({
      label: "Cor do título",
      name: "titleColor",
      required: true,
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
    boolean({
      label: "Overlay claro",
      name: "lightOverlay",
      required: true,
    }),
    boolean({
      label: "Overlay escuro",
      name: "darkOverlay",
      required: true,
    }),
  ],
});
