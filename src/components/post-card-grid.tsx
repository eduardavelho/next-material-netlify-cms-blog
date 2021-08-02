import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import {
  InfiniteScrollGrid,
  InfiniteScrollGridProps,
} from "./infinite-scroll-grid";
import { PostCard, PostCardProps } from "./post-card";

type PostCard = PostCardProps & { key: React.Key };

export type PostCardGridProps = {
  titleColor?: PostCardProps["titleColor"];
  posts: PostCard[];
  onRequestMorePosts: InfiniteScrollGridProps<PostCard>["onRequestMoreItems"];
  hasMorePosts: InfiniteScrollGridProps<PostCard>["hasMoreItems"];
};

export function PostCardGrid({
  titleColor,
  onRequestMorePosts,
  hasMorePosts,
  posts,
}: PostCardGridProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box maxWidth="960px" marginX={isDesktop ? "auto" : 1.6} marginY={1.6}>
      <InfiniteScrollGrid
        onRequestMoreItems={onRequestMorePosts}
        hasMoreItems={hasMorePosts}
        items={posts}
        mapItemToComponent={(props) => (
          <PostCard {...props} titleColor={titleColor} />
        )}
      />
    </Box>
  );
}
