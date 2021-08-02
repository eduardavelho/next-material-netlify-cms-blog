import {
  file,
  string,
  color,
  image,
  boolean,
} from "@egvelho/next-material/netlify-cms/data";

export const contactFormData = file({
  file: "app/home/contact-form-data.json",
  label: "Formulário de contato",
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
  ],
});
