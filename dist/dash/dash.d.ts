import React from "react";
import { Theme } from "@material-ui/core/styles";
import { AppBarProps } from "./app-bar";
import { BottomNavigationProps } from "./bottom-navigation";
import { DrawerProps } from "./drawer";
import { FooterProps } from "./footer";
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
export declare function Dash({ appBarBackgroundColor, appBarColor, logo, shortName, appBarLinks, appBarLinksAriaLabel, drawerButtonAriaLabel, drawerLinksAriaLabel, drawerLinks, footerLinksAriaLabel, footerLinks, bottomNavigationLinks, theme, children, }: DashProps): JSX.Element;
