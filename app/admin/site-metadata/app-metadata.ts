import { theme } from "app/theme";
import {
  file,
  string,
  color,
  select,
} from "@egvelho/next-material/netlify-cms/data";
import packageJson from "package.json";

export const appMetadata = file({
  label: "Metadados do site",
  file: "app.json",
  fields: [
    string({ name: "name", label: "Nome", required: true }),
    string({ name: "shortName", label: "Nome curto", required: true }),
    string({ name: "description", label: "Descrição", required: true }),
    select({
      name: "lang",
      label: "Idioma",
      required: true,
      options: [
        { label: "Português do Brasil", value: "pt-BR" },
        { label: "Inglês dos EUA", value: "en-US" },
      ],
    }),
    string({
      name: "twitterAt",
      label: "Arroba do Twitter",
      required: false,
    }),
    string({
      name: "facebookAppId",
      label: "App ID do Facebook",
      required: false,
    }),
    string({
      name: "version",
      label: "Versão",
      required: true,
    }),
    string({
      name: "developerName",
      label: "Nome do desenvolvedor",
      required: true,
    }),
    string({
      name: "developerURL",
      label: "URL do desenvolvedor",
      required: true,
    }),
    color({
      name: "backgroundColor",
      label: "Cor de fundo",
      allowInput: true,
      required: true,
    }),
    color({
      name: "dashColor",
      label: "Cor da barra superior",
      allowInput: true,
      required: true,
    }),
    color({
      name: "primaryColor",
      label: "Cor primária",
      allowInput: true,
      required: true,
    }),
    color({
      name: "secondaryColor",
      label: "Cor secundária",
      allowInput: true,
      required: true,
    }),
    select({
      name: "orientation",
      label: "Orientação da tela",
      required: true,
      options: [
        { label: "Qualquer uma", value: "any" },
        { label: "Natural", value: "natural" },
        { label: "Paisagem", value: "landscape" },
        { label: "Paisagem primária", value: "landscape-primary" },
        { label: "Paisagem secondária", value: "landscape-secondary" },
        { label: "Retrato", value: "portrait" },
        { label: "Retrato primário", value: "portrait-primary" },
        { label: "Retrato secundário", value: "portrait-secondary" },
      ],
    }),
  ],
});
