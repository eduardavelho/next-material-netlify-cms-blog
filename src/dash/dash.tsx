import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import { AppBar, AppBarProps } from "./app-bar";
import { BottomNavigation, BottomNavigationProps } from "./bottom-navigation";
import { Drawer, DrawerProps } from "./drawer";
import { Footer, FooterProps } from "./footer";
import { Snackbar, SnackbarProps } from "./snackbar";

export interface DashProps {
  children: React.ReactNode;
  appBarBackgroundColor: AppBarProps["backgroundColor"];
  appBarColor: AppBarProps["color"];
  shortName: AppBarProps["shortName"];
  logo: AppBarProps["logo"];
  appBarItems: AppBarProps["items"];
  appBarItemsAriaLabel: AppBarProps["itemsAriaLabel"];
  drawerButtonAriaLabel: AppBarProps["drawerButtonAriaLabel"];
  drawerItemsAriaLabel: DrawerProps["itemsAriaLabel"];
  drawerItems: DrawerProps["items"];
  drawerOpen: DrawerProps["drawerOpen"];
  setDrawerOpen: DrawerProps["setDrawerOpen"];
  footerItemsAriaLabel: FooterProps["itemsAriaLabel"];
  footerItems: FooterProps["items"];
  bottomNavigationItems: BottomNavigationProps["items"];
  snackbarContent: SnackbarProps["content"];
  setSnackbarContent: SnackbarProps["setContent"];
}

export function Dash({
  appBarBackgroundColor,
  appBarColor,
  logo,
  shortName,
  appBarItems,
  appBarItemsAriaLabel,
  drawerButtonAriaLabel,
  drawerItemsAriaLabel,
  drawerItems,
  drawerOpen,
  setDrawerOpen,
  footerItemsAriaLabel,
  footerItems,
  bottomNavigationItems,
  snackbarContent,
  setSnackbarContent,
  children,
}: DashProps) {
  const theme = useTheme();

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
        itemsAriaLabel={drawerItemsAriaLabel}
        items={drawerItems}
        drawerOpen={drawerOpen}
        setDrawerOpen={(drawerOpen) => setDrawerOpen(drawerOpen)}
      />
      <main>{children}</main>
      <Footer
        itemsAriaLabel={footerItemsAriaLabel}
        items={footerItems}
        color={theme.palette.secondary.contrastText}
        backgroundColor={theme.palette.secondary.main}
      />
      <Hidden smUp>
        <BottomNavigation items={bottomNavigationItems} />
      </Hidden>
      <Snackbar content={snackbarContent} setContent={setSnackbarContent} />
    </>
  );
}
