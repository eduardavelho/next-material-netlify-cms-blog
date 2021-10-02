import { collectionFile, GetCollectionType } from "next-cms/collection";

export type ContactFormData = GetCollectionType<typeof contactFormData>;

export const contactFormData = collectionFile({
  file: "app/home/contact-form-data.json",
  label: "Formulário de contato",
}).fields((data) => ({
  title: data.string({
    label: "Título",
  }),
  label: data.string({
    label: "Rótulo do botão",
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
}));
