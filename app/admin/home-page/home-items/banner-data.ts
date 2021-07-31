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
      required: false,
    }),
    text({
      label: "Subtítulo",
      name: "subtitle",
      required: false,
    }),
    image({
      label: "Imagem",
      name: "image",
      required: false,
    }),
    string({
      label: "Texto alternativo da imagem",
      name: "imageAlt",
      required: false,
    }),
    number({
      label: "Largura da imagem",
      name: "imageWidth",
      required: false,
      valueType: "int",
      min: 128,
      max: 512,
      step: 16,
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
  ],
});
