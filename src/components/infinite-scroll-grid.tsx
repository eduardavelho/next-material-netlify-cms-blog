import React from "react";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import { MasonryGrid, MasonryGridProps } from "./masonry-grid";
import { InfiniteScroll, InfiniteScrollProps } from "./infinite-scroll";

export type InfiniteScrollGridProps<Item extends { key: React.Key }> = {
  items: Item[];
  hasMoreItems: InfiniteScrollProps["hasMoreItems"];
  onRequestMoreItems: InfiniteScrollProps["onRequestMoreItems"];
  mapItemToComponent: (item: Item) => React.ReactNode;
} & Omit<MasonryGridProps, "children">;

export function InfiniteScrollGrid<Item extends { key: React.Key }>({
  hasMoreItems,
  onRequestMoreItems,
  items,
  mapItemToComponent,
  ...gridProps
}: InfiniteScrollGridProps<Item>) {
  const theme = useTheme();

  return (
    <InfiniteScroll
      itemsLength={items.length}
      onRequestMoreItems={onRequestMoreItems}
      hasMoreItems={hasMoreItems}
    >
      <MasonryGrid xl={3} spacing={theme.spacing(2)} {...gridProps}>
        {items.map((props) => (
          <Box key={props.key}>{mapItemToComponent(props)}</Box>
        ))}
      </MasonryGrid>
    </InfiniteScroll>
  );
}
