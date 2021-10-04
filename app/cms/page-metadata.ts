import { collectionFile } from "@egvelho/next-meta/cms/collection";

export function pageMetadata({ file }: { file: string }) {
  return collectionFile({
    file,
    label: "Metadados da página",
  }).fields((data) => ({
    title: data.string({
      label: "Título",
    }),
    description: data.string({
      label: "Descrição",
    }),
    image: data.image({
      label: "Imagem",
    }),
    keywords: data.keywords({
      label: "Palavras-chave",
      min: 1,
      max: 5,
    }),
  }));
}
