import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import { NoResults, NoResultsProps } from "./no-results";
import { SearchHeader, SearchHeaderProps } from "./search-header";
import { PostCardGrid, PostCardGridProps } from "./post-card-grid";
import { Breadcrumbs, BreadcrumbsProps } from "./breadcrumbs";

export type BlogProps = SearchHeaderProps &
  PostCardGridProps &
  NoResultsProps &
  BreadcrumbsProps;

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
  onRequestMorePosts,
  onChange,
  hasMorePosts,
  posts,
  noResultsText,
  breadcrumbs,
}: BlogProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

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
      <Box maxWidth="960px" marginX={isDesktop ? "auto" : 1.6} marginY={1.6}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </Box>
      {posts.length > 0 ? (
        <PostCardGrid {...postCardGridProps} />
      ) : (
        <NoResults {...noResultsProps} />
      )}
    </>
  );
}
