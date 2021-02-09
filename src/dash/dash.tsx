import React from "react";
import { Theme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import { AppBar, AppBarProps } from "./app-bar";
import { BottomNavigation, BottomNavigationProps } from "./bottom-navigation";
import { Drawer, DrawerProps } from "./drawer";
import { Footer, FooterProps } from "./footer";

export interface DashProps {
  children: React.ReactNode;
  theme: Theme;
  appBarBackgroundColor: AppBarProps["backgroundColor"];
  appBarColor: AppBarProps["color"];
  shortName: AppBarProps["shortName"];
  logo: AppBarProps["logo"];
  appBarLinks: AppBarProps["links"];
  appBarLinksAriaLabel: AppBarProps["linksAriaLabel"];
  drawerButtonAriaLabel: AppBarProps["drawerButtonAriaLabel"];
  drawerLinksAriaLabel: DrawerProps["linksAriaLabel"];
  drawerLinks: DrawerProps["links"];
  footerLinksAriaLabel: FooterProps["linksAriaLabel"];
  footerLinks: FooterProps["links"];
  bottomNavigationLinks: BottomNavigationProps["links"];
}

export function Dash({
  appBarBackgroundColor,
  appBarColor,
  logo,
  shortName,
  appBarLinks,
  appBarLinksAriaLabel,
  drawerButtonAriaLabel,
  drawerLinksAriaLabel,
  drawerLinks,
  footerLinksAriaLabel,
  footerLinks,
  bottomNavigationLinks,
  theme,
  children,
}: DashProps) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <>
      <AppBar
        backgroundColor={appBarBackgroundColor}
        color={appBarColor}
        shortName={shortName}
        logo={logo}
        drawerButtonAriaLabel={drawerButtonAriaLabel}
        linksAriaLabel={appBarLinksAriaLabel}
        setDrawerOpen={(drawerOpen) => setDrawerOpen(drawerOpen)}
        links={appBarLinks}
      />
      <Drawer
        linksAriaLabel={drawerLinksAriaLabel}
        links={drawerLinks}
        drawerOpen={drawerOpen}
        setDrawerOpen={(drawerOpen) => setDrawerOpen(drawerOpen)}
      />
      <main>{children}</main>
      <Footer
        linksAriaLabel={footerLinksAriaLabel}
        links={footerLinks}
        color={theme.palette.secondary.contrastText}
        backgroundColor={theme.palette.secondary.main}
      />
      <Hidden smUp>
        <BottomNavigation
          color={theme.palette.primary.main}
          links={bottomNavigationLinks}
        />
      </Hidden>
    </>
  );
}
