import React from "react";
import { NoResults, NoResultsProps } from "./no-results";
import { SearchHeader, SearchHeaderProps } from "./search-header";
import { PostCardGrid, PostCardGridProps } from "./post-card-grid";

export type BlogProps = SearchHeaderProps & PostCardGridProps & NoResultsProps;

export function Blog({
  title,
  titleColor,
  background,
  options,
  value,
  placeholder,
  noOptionsText,
  disabled,
  loading,
  dark,
  onRequestMorePosts,
  onChange,
  hasMorePosts,
  posts,
  noResultsText,
}: BlogProps) {
  const searchHeaderProps = {
    title,
    titleColor,
    background,
    options,
    value,
    placeholder,
    noOptionsText,
    disabled,
    onChange,
    loading,
    dark,
  };

  const postCardGridProps = {
    titleColor,
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
