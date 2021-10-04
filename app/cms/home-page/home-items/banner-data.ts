import {
  collectionFile,
  GetCollectionType,
} from "@egvelho/next-meta/collection";

export type BannerData = GetCollectionType<typeof bannerData>;

export const bannerData = collectionFile({
  file: "app/home/banner-data.json",
  label: "Banner",
}).fields((data) => ({
  title: data.string<"optional">({
    label: "Título",
    required: false,
  }),
  subtitle: data.text<"optional">({
    label: "Subtítulo",
    required: false,
  }),
  image: data.image<"optional">({
    label: "Imagem",
    required: false,
  }),
  imageAlt: data.string<"optional">({
    label: "Texto alternativo da imagem",
    required: false,
  }),
  imageWidth: data.number<"optional">({
    label: "Largura da imagem",
    required: false,
    valueType: "int",
    min: 128,
    max: 512,
    step: 16,
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
}));
