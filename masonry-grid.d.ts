import React from "react";
export interface MasonryGridProps {
    children: React.ReactNode;
    xl?: number;
    lg?: number;
    md?: number;
    sm?: number;
    xs?: number;
    spacing?: number;
}
export declare function MasonryGrid({ children, xl, lg, md, sm, xs, spacing, }: MasonryGridProps): JSX.Element;
