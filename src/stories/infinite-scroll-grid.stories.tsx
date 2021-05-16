import React from "react";
import { Meta } from "@storybook/react";
import { InfiniteScrollGrid } from "../infinite-scroll-grid";

export default {
  title: "Example/InfiniteScrollGrid",
  component: InfiniteScrollGrid,
} as Meta;

export const Usage = () => {
  const [count, setCount] = React.useState(10);

  return (
    <InfiniteScrollGrid
      items={new Array(count)
        .fill(undefined)
        .map((_, index) => ({ title: `Title ${index}` }))}
      hasMoreItems={count < 50}
      mapItemToComponent={({ title }) => <h1>{title}</h1>}
      onRequestMoreItems={() => {
        setCount(count + 10);
      }}
    />
  );
};
