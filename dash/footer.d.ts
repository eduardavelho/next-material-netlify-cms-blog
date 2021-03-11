/// <reference types="react" />
declare type Item = {
    label: string;
} & ({
    href: string;
} | {
    onClick: () => void;
});
export interface FooterProps {
    backgroundColor: string;
    color: string;
    itemsAriaLabel: string;
    items: Item[];
}
export declare function Footer({ backgroundColor, color, itemsAriaLabel, items, }: FooterProps): JSX.Element;
export {};
