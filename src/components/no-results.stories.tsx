import React from "react";
import { Meta } from "@storybook/react";
import { NoResults } from "./no-results";

export default {
  title: "Example/NoResults",
  component: NoResults,
} as Meta;

export const Usage = () => {
  return (
    <NoResults
      noResultsText="No results found for search"
      noResultsDescription="No results has found for the current search query"
    />
  );
};
