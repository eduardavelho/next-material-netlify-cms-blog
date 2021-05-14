import React from "react";
import { Meta } from "@storybook/react";
import { SearchHeader } from "../search-header";

export default {
  title: "Example/SearchHeader",
  component: SearchHeader,
} as Meta;

export const Usage = () => {
  const [searchValue, setSearchValue] = React.useState(["A"]);
  return (
    <SearchHeader
      title="Search title"
      titleColor="yellow"
      background="red"
      onChange={async (searchValue) => {
        setSearchValue(searchValue);
      }}
      loading={false}
      value={searchValue}
      dark={true}
      disabled={false}
      noOptionsText="No options"
      options={["Gon", "Killua", "Kurapika", "Giovani Giorgio", "Juan"]}
      placeholder="Placeholder here"
    />
  );
};
