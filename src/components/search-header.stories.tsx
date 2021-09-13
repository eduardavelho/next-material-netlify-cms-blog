import React from "react";
import { Meta } from "@storybook/react";
import { SearchHeader } from "./search-header";

export default {
  title: "Example/SearchHeader",
  component: SearchHeader,
} as Meta;

export const Usage = () => {
  const [searchValue, setSearchValue] = React.useState(["A"]);
  return (
    <SearchHeader
      title="Search title"
      titleColor="#f0f"
      background="#f00"
      onChange={async (searchValue) => {
        setSearchValue(searchValue);
      }}
      loading={false}
      value={searchValue}
      disabled={false}
      noOptionsText="No options"
      options={["Gon", "Killua", "Kurapika", "Giovani Giorgio", "Juan"]}
      placeholder="Placeholder here"
    />
  );
};
