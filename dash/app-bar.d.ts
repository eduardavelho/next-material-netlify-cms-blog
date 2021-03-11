/// <reference types="react" />
declare type Item = {
    label: string;
} & ({
    href: string;
} | {
    onClick: () => void;
});
export interface AppBarProps {
    backgroundColor: string;
    color: string;
    shortName: string;
    logo: string;
    items: Item[];
    itemsAriaLabel: string;
    drawerButtonAriaLabel: string;
    setDrawerOpen: (drawerOpen: boolean) => void;
}
export declare function AppBar({ backgroundColor, color, shortName, logo, items, itemsAriaLabel, drawerButtonAriaLabel, setDrawerOpen, }: AppBarProps): JSX.Element;
export {};
