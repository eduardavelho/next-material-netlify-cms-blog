import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import { AppBar, AppBarProps } from "./app-bar";
import { BottomNavigation, BottomNavigationProps } from "./bottom-navigation";
import { Drawer, DrawerProps } from "./drawer";
import { Footer, FooterProps } from "./footer";

export interface DashProps {
  children: React.ReactNode;
  appBarBackgroundColor: AppBarProps["backgroundColor"];
  appBarColor: AppBarProps["color"];
  shortName: AppBarProps["shortName"];
  logo: AppBarProps["logo"];
  appBarItems: AppBarProps["items"];
  appBarItemsAriaLabel: AppBarProps["itemsAriaLabel"];
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
  appBarItems,
  appBarItemsAriaLabel,
  drawerButtonAriaLabel,
  drawerLinksAriaLabel,
  drawerLinks,
  footerLinksAriaLabel,
  footerLinks,
  bottomNavigationLinks,
  children,
}: DashProps) {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <>
      <AppBar
        backgroundColor={appBarBackgroundColor}
        color={appBarColor}
        shortName={shortName}
        logo={logo}
        drawerButtonAriaLabel={drawerButtonAriaLabel}
        itemsAriaLabel={appBarItemsAriaLabel}
        setDrawerOpen={(drawerOpen) => setDrawerOpen(drawerOpen)}
        items={appBarItems}
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
