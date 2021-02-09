/// <reference types="react" />
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
export interface BottomNavigationProps {
    color: string;
    links: {
        link: string;
        label: string;
        Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    }[];
}
export declare function BottomNavigation({ links, color }: BottomNavigationProps): JSX.Element;
