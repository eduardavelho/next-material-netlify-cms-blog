/// <reference types="react" />
export interface AppBarProps {
    backgroundColor: string;
    color: string;
    shortName: string;
    logo: string;
    links: {
        link: string;
        label: string;
    }[];
    linksAriaLabel: string;
    drawerButtonAriaLabel: string;
    setDrawerOpen: (drawerOpen: boolean) => void;
}
export declare function AppBar({ backgroundColor, color, shortName, logo, links, linksAriaLabel, drawerButtonAriaLabel, setDrawerOpen, }: AppBarProps): JSX.Element;
