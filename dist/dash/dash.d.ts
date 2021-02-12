import React from "react";
import { AppBarProps } from "./app-bar";
import { BottomNavigationProps } from "./bottom-navigation";
import { DrawerProps } from "./drawer";
import { FooterProps } from "./footer";
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
    footerItemsAriaLabel: FooterProps["itemsAriaLabel"];
    footerItems: FooterProps["items"];
    bottomNavigationItems: BottomNavigationProps["items"];
}
export declare function Dash({ appBarBackgroundColor, appBarColor, logo, shortName, appBarItems, appBarItemsAriaLabel, drawerButtonAriaLabel, drawerItemsAriaLabel, drawerItems, footerItemsAriaLabel, footerItems, bottomNavigationItems, children, }: DashProps): JSX.Element;
