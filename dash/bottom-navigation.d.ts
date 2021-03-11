/// <reference types="react" />
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
declare type Item = {
    label: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
} & ({
    href: string;
} | {
    onClick: () => void;
});
export interface BottomNavigationProps {
    color: string;
    items: Item[];
}
export declare function BottomNavigation({ items, color }: BottomNavigationProps): JSX.Element;
export {};
