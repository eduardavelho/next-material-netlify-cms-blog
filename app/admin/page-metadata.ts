import { collectionFile } from "@egvelho/next-material/netlify-cms/collection";

export function pageMetadata({ file }: { file: string }) {
  return collectionFile({
    file,
    label: "Metadados da página",
  }).fields((data) => ({
    title: data.string({
      label: "Título",
      required: true,
    }),
    description: data.string({
      label: "Descrição",
      required: true,
    }),
    image: data.image({
      label: "Imagem",
      required: true,
    }),
    keywords: data.keywords({
      label: "Palavras-chave",
      min: 1,
      max: 5,
    }),
  }));
}
