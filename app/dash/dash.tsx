import { useContext, ReactNode } from "react";
import {
  Dash as MuiDash,
  DashProps as MuiDashProps,
} from "@egvelho/next-material/components/dash";
import { links } from "app/api";
import { Context } from "app/context";
import appConfig from "app.json";
import logo from "icon.svg";
import dashColors from "./dash-colors.json";
import dashItems from "./dash-items.json";

const texts = {
  appBarItemsAriaLabel: "Links do cabeçalho",
  drawerButtonAriaLabel: "Abrir menu de navegação",
  drawerItemsAriaLabel: "Links do menu de navegação",
  footerItemsAriaLabel: "Links do rodapé",
  loginLabel: "Entrar",
  createAccountLabel: "Criar conta",
  logoutLabel: "Sair",
};

const appBarItems = mapFilterItemsToLinks(dashItems.appBar).map(
  (item, key) => ({
    key,
    href: item.href as string,
    label: item.longLabel,
  })
);

const footerItems = mapFilterItemsToLinks(dashItems.footer).map(
  (item, key) => ({
    key,
    href: item.href as string,
    label: item.longLabel,
  })
);

const bottomNavigationItems = mapFilterItemsToLinks(
  dashItems.bottomNavigation
).map((item, key) => ({
  key,
  href: item.href as string,
  label: item.label,
  Icon: item.Icon,
}));

const drawerItems = mapFilterItemsToLinks(dashItems.drawer).map(
  (item, key) => ({
    key,
    href: item.href as string,
    label: item.longLabel,
    Icon: item.Icon,
  })
);

export interface DashProps {
  children: ReactNode;
  snackbarContent: MuiDashProps["snackbarContent"];
  setSnackbarContent: MuiDashProps["setSnackbarContent"];
}

export function Dash({
  children,
  snackbarContent,
  setSnackbarContent,
}: DashProps) {
  const { context, setContext } = useContext(Context);

  return (
    <MuiDash
      snackbarContent={snackbarContent}
      setSnackbarContent={setSnackbarContent}
      logo={logo}
      shortName={appConfig.shortName}
      appBarColor={dashColors.appBarColor}
      appBarBackgroundColor={appConfig.dashColor}
      footerColor={dashColors.footerColor}
      footerBackgroundColor={dashColors.footerBackgroundColor}
      drawerOpen={context.drawerOpen}
      setDrawerOpen={(drawerOpen) => setContext({ drawerOpen })}
      appBarItems={appBarItems}
      footerItems={footerItems}
      bottomNavigationItems={bottomNavigationItems}
      drawerItems={drawerItems}
      {...texts}
    >
      {children}
    </MuiDash>
  );
}

function mapFilterItemsToLinks(items: { page: string }[]) {
  return items.map(({ page }) => links[page as keyof typeof links]);
}
