/// <reference types="react" />
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
export interface DrawerProps {
    linksAriaLabel: string;
    links: {
        link: string;
        label: string;
        Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    }[];
    drawerOpen: boolean;
    setDrawerOpen: (drawerOpen: boolean) => void;
}
export declare function Drawer({ linksAriaLabel, links, drawerOpen, setDrawerOpen, }: DrawerProps): JSX.Element;
