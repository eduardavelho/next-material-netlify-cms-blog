import {
  collectionFile,
  GetCollectionType,
} from "@egvelho/next-meta/cms/collection";

export type BannerWithButtonData = GetCollectionType<
  typeof bannerWithButtonData
>;

export const bannerWithButtonData = collectionFile({
  file: "app/home/banner-with-button-data.json",
  label: "Banner com botão",
}).fields((data) => ({
  title: data.string({
    label: "Título",
  }),
  label: data.string({
    label: "Rótulo do botão",
  }),
  href: data.string({
    label: "Link",
  }),
  image: data.image({
    label: "Imagem",
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
  lightOverlay: data.boolean({
    label: "Overlay claro",
    defaultValue: false,
  }),
  darkOverlay: data.boolean({
    label: "Overlay escuro",
    defaultValue: false,
  }),
}));
