/// <reference types="react" />
export interface FooterProps {
    backgroundColor: string;
    color: string;
    linksAriaLabel: string;
    links: {
        label: string;
        link: string;
    }[];
}
export declare function Footer({ backgroundColor, color, linksAriaLabel, links, }: FooterProps): JSX.Element;
