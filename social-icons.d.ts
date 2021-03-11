/// <reference types="react" />
export interface SocialIconsProps {
    facebook?: boolean | string;
    twitter?: boolean | string;
    whatsApp?: boolean | string;
    linkedIn?: boolean | string;
    instagram?: string;
    lattes?: string;
    email?: string;
    smallIcons?: boolean;
    largeIcons?: boolean;
    iconsInheritFontSize?: boolean;
    socialAnchorTitle: string;
}
export declare function SocialIcons(props: SocialIconsProps): JSX.Element;
