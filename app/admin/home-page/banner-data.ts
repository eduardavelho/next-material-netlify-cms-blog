import {
  file,
  string,
  color,
  image,
  text,
  number,
} from "@egvelho/next-material/netlify-cms/data";

export const bannerData = file({
  file: "app/home/banner-data.json",
  label: "Banner",
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
    image({
      label: "Imagem",
      name: "image",
      required: true,
    }),
    string({
      label: "Texto alternativo da imagem",
      name: "imageAlt",
      required: true,
    }),
    number({
      label: "Largura da imagem",
      name: "imageWidth",
      required: true,
      valueType: "int",
      min: 128,
      max: 512,
      step: 16,
    }),
    color({
      label: "Cor do texto",
      name: "color",
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
  ],
});
