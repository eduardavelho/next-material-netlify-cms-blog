import { useContext, ReactNode } from "react";
import {
  Dash as MuiDash,
  DashProps as MuiDashProps,
} from "@egvelho/next-material/components/dash";
import { theme } from "app/theme";
import { links } from "app/api";
import { Context } from "app/context";
import appConfig from "app.json";
import appBarItems from "./app-bar-items.json";
import bottomNavigationItems from "./bottom-navigation-items.json";
import drawerItems from "./drawer-items.json";
import footerItems from "./footer-items.json";
import logo from "icon.svg";

const texts = {
  appBarItemsAriaLabel: "Links do cabeçalho",
  drawerButtonAriaLabel: "Abrir menu de navegação",
  drawerItemsAriaLabel: "Links do menu de navegação",
  footerItemsAriaLabel: "Links do rodapé",
  loginLabel: "Entrar",
  createAccountLabel: "Criar conta",
  logoutLabel: "Sair",
};

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
      appBarColor={theme.palette.primary.main}
      appBarBackgroundColor={appConfig.dashColor}
      drawerOpen={context.drawerOpen}
      setDrawerOpen={(drawerOpen) => setContext({ drawerOpen })}
      appBarItems={Object.entries(appBarItems)
        .filter(([_, item]) => item)
        .map(([key]) => ({
          href: links[key as keyof typeof links].href,
          label: links[key as keyof typeof links].longLabel,
          Icon: links[key as keyof typeof links].Icon,
        }))}
      footerItems={Object.entries(footerItems)
        .filter(([_, item]) => item)
        .map(([key]) => ({
          href: links[key as keyof typeof links].href,
          label: links[key as keyof typeof links].longLabel,
          Icon: links[key as keyof typeof links].Icon,
        }))}
      bottomNavigationItems={Object.entries(bottomNavigationItems)
        .filter(([_, item]) => item)
        .map(([key]) => ({
          href: links[key as keyof typeof links].href,
          label: links[key as keyof typeof links].label,
          Icon: links[key as keyof typeof links].Icon,
        }))}
      drawerItems={Object.entries(drawerItems)
        .filter(([_, item]) => item)
        .map(([key]) => ({
          href: links[key as keyof typeof links].href,
          label: links[key as keyof typeof links].longLabel,
          Icon: links[key as keyof typeof links].Icon,
        }))}
      {...texts}
    >
      {children}
    </MuiDash>
  );
}
