import * as netlifyCms from "@egvelho/next-material/netlify-cms/data";

export function pageMetadata({ file }: { file: string }) {
  return netlifyCms.file({
    file,
    label: "Metadados da página",
    fields: [
      netlifyCms.string({
        label: "Título",
        name: "title",
        required: true,
      }),
      netlifyCms.string({
        label: "Descrição",
        name: "description",
        required: true,
      }),
      netlifyCms.image({
        label: "Imagem",
        name: "image",
        required: true,
      }),
      netlifyCms.keywords({
        label: "Palavras-chave",
        name: "keywords",
        min: 1,
        max: 5,
      }),
    ],
  });
}
