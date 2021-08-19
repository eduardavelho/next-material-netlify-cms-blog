import { collectionFile, GetCollectionType } from "tropicalia/cms/collection";

export type AppMetadata = GetCollectionType<typeof appMetadata>;

export const appMetadata = collectionFile({
  label: "Metadados do site",
  file: "app.json",
}).fields((data) => ({
  name: data.string({ label: "Nome" }),
  shortName: data.string({
    label: "Nome curto",
  }),
  description: data.string({
    label: "Descrição",
  }),
  lang: data.selectOne({
    label: "Idioma",
    options: [
      { label: "Português do Brasil", value: "pt-BR" },
      { label: "Inglês dos EUA", value: "en-US" },
    ],
  }),
  twitterAt: data.string<"optional">({
    label: "Arroba do Twitter",
    required: false,
  }),
  facebookAppId: data.string<"optional">({
    label: "App ID do Facebook",
    required: false,
  }),
  version: data.string({
    label: "Versão",
  }),
  developerName: data.string({
    label: "Nome do desenvolvedor",
  }),
  developerURL: data.string({
    label: "URL do desenvolvedor",
  }),
  backgroundColor: data.color({
    label: "Cor de fundo",
    allowInput: true,
  }),
  dashColor: data.color({
    label: "Cor da barra superior",
    allowInput: true,
  }),
  primaryColor: data.color({
    label: "Cor primária",
    allowInput: true,
  }),
  secondaryColor: data.color({
    label: "Cor secundária",
    allowInput: true,
  }),
  orientation: data.selectOne({
    label: "Orientação da tela",
    options: [
      { label: "Tanto faz", value: "any" },
      { label: "Natural", value: "natural" },
      { label: "Paisagem", value: "landscape" },
      { label: "Paisagem primária", value: "landscape-primary" },
      { label: "Paisagem secondária", value: "landscape-secondary" },
      { label: "Retrato", value: "portrait" },
      { label: "Retrato primário", value: "portrait-primary" },
      { label: "Retrato secundário", value: "portrait-secondary" },
    ],
  }),
}));
