import { file, color } from "@egvelho/next-material/netlify-cms/data";

export const dashColorsData = file({
  file: "app/dash/dash-colors.json",
  label: "Cores da dash",
  fields: [
    color({
      label: "Cor do texto da barra superior",
      name: "appBarColor",
      required: true,
      allowInput: true,
    }),
    color({
      label: "Cor do texto do rodapé",
      name: "footerColor",
      required: true,
      allowInput: true,
    }),
    color({
      label: "Cor de fundo do rodapé",
      name: "footerBackgroundColor",
      required: true,
      allowInput: true,
    }),
  ],
});
