import { files } from "@egvelho/next-material/netlify-cms/data";
import { appMetadata } from "./app-metadata";
import {
  appBarItems,
  drawerItems,
  bottomNavigationItems,
  footerItems,
} from "./dash-items";

export const siteMetadata = files({
  label: "Geral",
  files: [
    appMetadata,
    appBarItems,
    drawerItems,
    bottomNavigationItems,
    footerItems,
  ],
});
