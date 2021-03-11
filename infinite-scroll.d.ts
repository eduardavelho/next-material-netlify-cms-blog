import React from "react";
export interface InfiniteScrollProps {
    hasMoreItems: boolean;
    onRequestMoreItems: () => void;
    itemsLength: number;
    children: React.ReactNode;
}
export declare function InfiniteScroll({ onRequestMoreItems, hasMoreItems, itemsLength, children, }: InfiniteScrollProps): JSX.Element;
