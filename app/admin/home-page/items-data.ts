import {
  file,
  string,
  boolean,
  color,
  list,
  text,
  image,
} from "@egvelho/next-material/netlify-cms/data";

export const itemsData = file({
  file: "app/home/items-data.json",
  label: "Items de descrição",
  fields: [
    string({
      label: "Título",
      name: "title",
      required: true,
    }),
    color({
      label: "Cor do título",
      name: "titleColor",
      required: true,
      allowInput: true,
    }),
    color({
      label: "Cor de fundo",
      name: "backgroundColor",
      required: false,
      allowInput: true,
    }),
    image({
      label: "Imagem de fundo",
      name: "backgroundImage",
      required: false,
    }),
    boolean({
      label: "Fundo escuro",
      name: "backgroundIsDark",
      required: true,
    }),
    list({
      label: "Items",
      labelSingular: "Item",
      name: "items",
      fields: [
        text({
          label: "Texto",
          name: "text",
          required: true,
        }),
        image({
          label: "Imagem",
          name: "image",
          required: true,
        }),
      ],
    }),
  ],
});
