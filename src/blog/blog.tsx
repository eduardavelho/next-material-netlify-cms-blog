import React from "react";
import { SearchHeader, SearchHeaderProps } from "../search-header";
import { PostCardGrid, PostCardGridProps } from "./post-card-grid";

export type BlogProps = SearchHeaderProps & PostCardGridProps;

export function Blog({
  title,
  background,
  searchOptions,
  searchDefaultValue,
  searchPlaceholder,
  searchNoOptionsText,
  searchDisabled,
  loading,
  dark,
  color,
  onRequestMorePosts,
  hasMorePosts,
  posts,
}: BlogProps) {
  const searchHeaderProps = {
    title,
    background,
    searchOptions,
    searchDefaultValue,
    searchPlaceholder,
    searchNoOptionsText,
    searchDisabled,
    loading,
    dark,
  };

  const postCardGridProps = {
    color,
    onRequestMorePosts,
    hasMorePosts,
    posts,
  };

  return (
    <>
      <SearchHeader {...searchHeaderProps} />
      <PostCardGrid {...postCardGridProps} />
    </>
  );
}
