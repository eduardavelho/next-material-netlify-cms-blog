import { collectionFile, GetCollectionType } from "next-cms/collection";

export type DashColorsData = GetCollectionType<typeof dashColorsData>;

export const dashColorsData = collectionFile({
  file: "app/dash/dash-colors.json",
  label: "Cores da dash",
}).fields((data) => ({
  appBarColor: data.color({
    label: "Cor do texto da barra superior",
    allowInput: true,
  }),
  footerColor: data.color({
    label: "Cor do texto do rodapé",
    allowInput: true,
  }),
  footerBackgroundColor: data.color({
    label: "Cor de fundo do rodapé",
    allowInput: true,
  }),
}));
