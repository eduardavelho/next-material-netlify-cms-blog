import React from "react";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import { MasonryGrid, MasonryGridProps } from "./masonry-grid";
import { InfiniteScroll, InfiniteScrollProps } from "./infinite-scroll";

export type InfiniteScrollGridProps<Item> = {
  items: Item[];
  hasMoreItems: InfiniteScrollProps["hasMoreItems"];
  onRequestMoreItems: InfiniteScrollProps["onRequestMoreItems"];
  mapItemToComponent: (item: Item) => React.ReactNode;
} & Omit<MasonryGridProps, "children">;

export function InfiniteScrollGrid<Item>({
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
        {items.map((props, index) => (
          <Box key={`infinite-scroll-grid-item-${index}`}>
            {mapItemToComponent(props)}
          </Box>
        ))}
      </MasonryGrid>
    </InfiniteScroll>
  );
}
