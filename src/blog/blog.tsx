import React from "react";
import { NoResults, NoResultsProps } from "../no-results";
import { SearchHeader, SearchHeaderProps } from "../search-header";
import { PostCardGrid, PostCardGridProps } from "./post-card-grid";

export type BlogProps = SearchHeaderProps & PostCardGridProps & NoResultsProps;

export function Blog({
  title,
  background,
  searchOptions,
  searchDefaultValue,
  searchPlaceholder,
  searchNoOptionsText,
  searchDisabled,
  searchMultiple,
  loading,
  dark,
  color,
  onRequestMorePosts,
  onSearchSelect,
  hasMorePosts,
  posts,
  noResultsText,
}: BlogProps) {
  const searchHeaderProps = {
    title,
    background,
    searchOptions,
    searchDefaultValue,
    searchPlaceholder,
    searchNoOptionsText,
    searchDisabled,
    searchMultiple,
    onSearchSelect,
    loading,
    dark,
  };

  const postCardGridProps = {
    color,
    onRequestMorePosts,
    hasMorePosts,
    posts,
  };

  const noResultsProps = {
    noResultsText,
  };

  return (
    <>
      <SearchHeader {...searchHeaderProps} />
      {posts.length > 0 ? (
        <PostCardGrid {...postCardGridProps} />
      ) : (
        <NoResults {...noResultsProps} />
      )}
    </>
  );
}
