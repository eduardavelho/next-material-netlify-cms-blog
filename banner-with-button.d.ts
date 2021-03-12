import React from "react";
export interface BannerWithButtonProps {
    title: React.ReactNode;
    href: string;
    label: string;
    color: string;
    background: string;
    image: string;
}
export declare function BannerWithButton({ title, label, href, color, background, image, }: BannerWithButtonProps): JSX.Element;
