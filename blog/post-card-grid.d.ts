/// <reference types="react" />
import { InfiniteScrollGridProps } from "../infinite-scroll-grid";
import { PostCardProps } from "./post-card";
export declare type PostCardGridProps = {
    color?: PostCardProps["color"];
    posts: PostCardProps[];
    onRequestMorePosts: InfiniteScrollGridProps<PostCardProps>["onRequestMoreItems"];
    hasMorePosts: InfiniteScrollGridProps<PostCardProps>["hasMoreItems"];
};
export declare function PostCardGrid({ color, onRequestMorePosts, hasMorePosts, posts, }: PostCardGridProps): JSX.Element;
