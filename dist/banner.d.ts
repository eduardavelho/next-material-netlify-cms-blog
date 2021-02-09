/// <reference types="react" />
export interface BannerProps {
    image: string;
    imageAlt: string;
    backgroundImage: string;
    color: string;
    title: string;
    subtitle: string;
}
export declare function Banner({ image, imageAlt, backgroundImage, color, title, subtitle, }: BannerProps): JSX.Element;
