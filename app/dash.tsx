import { useContext, ReactNode } from "react";
import {
  Dash as MuiDash,
  DashProps as MuiDashProps,
} from "@egvelho/next-material-components/components/dash";
import theme from "app/theme";
import links from "app/links";
import { Context } from "app/context";
import appConfig from "app.json";
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

const appBarItems = [{ href: links.blog.href, label: links.blog.longLabel }];

const footerItems = [
  { href: links.blog.href, label: links.blog.longLabel },
  { href: links.contact.href, label: links.contact.longLabel },
];

const bottomNavigationItems = [
  {
    href: links.blog.href,
    label: links.blog.label,
    Icon: links.blog.Icon,
  },
  {
    href: links.index.href,
    label: links.index.label,
    Icon: links.index.Icon,
  },
  {
    href: links.contact.href,
    label: links.contact.label,
    Icon: links.contact.Icon,
  },
];

const drawerItems = [
  {
    href: links.blog.href,
    label: links.blog.longLabel,
    Icon: links.blog.Icon,
  },
  {
    href: links.contact.href,
    label: links.contact.longLabel,
    Icon: links.contact.Icon,
  },
  {
    href: links.about.href,
    label: links.about.longLabel,
    Icon: links.about.Icon,
  },
];

export interface DashProps {
  children: ReactNode;
  snackbarContent: MuiDashProps["snackbarContent"];
  setSnackbarContent: MuiDashProps["setSnackbarContent"];
}

export default function Dash({
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
      appBarItems={appBarItems}
      footerItems={footerItems}
      bottomNavigationItems={bottomNavigationItems}
      drawerItems={drawerItems}
      drawerOpen={context.drawerOpen}
      setDrawerOpen={(drawerOpen) => setContext({ drawerOpen })}
      {...texts}
    >
      {children}
    </MuiDash>
  );
}
