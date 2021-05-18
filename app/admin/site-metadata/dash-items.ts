import { links } from "app/api";
import { file, boolean } from "@egvelho/next-material/netlify-cms/data";

export const appBarItems = file({
  file: "app/dash/app-bar-items.json",
  label: "Items da barra superior",
  fields: Object.entries(links).map(([key, { longLabel }]) =>
    boolean({
      label: longLabel,
      name: key,
      required: true,
    })
  ),
});

export const drawerItems = file({
  file: "app/dash/drawer-items.json",
  label: "Items do drawer",
  fields: Object.entries(links).map(([key, { longLabel }]) =>
    boolean({
      label: longLabel,
      name: key,
      required: true,
    })
  ),
});

export const bottomNavigationItems = file({
  file: "app/dash/bottom-navigation-items.json",
  label: "Items da navegação inferior",
  fields: Object.entries(links).map(([key, { longLabel }]) =>
    boolean({
      label: longLabel,
      name: key,
      required: true,
    })
  ),
});

export const footerItems = file({
  file: "app/dash/footer-items.json",
  label: "Items do rodapé",
  fields: Object.entries(links).map(([key, { longLabel }]) =>
    boolean({
      label: longLabel,
      name: key,
      required: true,
    })
  ),
});
