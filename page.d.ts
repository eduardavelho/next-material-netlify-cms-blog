import React from "react";
export interface PageProps {
    header: React.ReactNode;
    children: React.ReactNode;
    breadcrumbs?: [React.ReactNode, string][];
    background?: string;
    dark?: boolean;
    paper?: boolean;
}
export declare function Page({ header, children, breadcrumbs, background, dark, paper, }: PageProps): JSX.Element;
