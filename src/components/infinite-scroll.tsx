import React from "react";
import BaseInfiniteScroll from "react-infinite-scroll-component";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

export interface InfiniteScrollProps {
  hasMoreItems: boolean;
  onRequestMoreItems: () => void;
  itemsLength: number;
  children: React.ReactNode;
}

export function InfiniteScroll({
  onRequestMoreItems,
  hasMoreItems,
  itemsLength,
  children,
}: InfiniteScrollProps) {
  return (
    <BaseInfiniteScroll
      dataLength={itemsLength}
      next={onRequestMoreItems}
      hasMore={hasMoreItems}
      style={{
        overflow: "initial",
      }}
      loader={
        <Box paddingTop={1.6} display="flex" justifyContent="center">
          <Box
            width="64px"
            height="64px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            <CircularProgress />
          </Box>
        </Box>
      }
    >
      {children}
    </BaseInfiniteScroll>
  );
}
