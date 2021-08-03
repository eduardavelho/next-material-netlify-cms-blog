import React from "react";
import { Meta } from "@storybook/react";
import { InfiniteScroll } from "../components/infinite-scroll";

export default {
  title: "Example/InfiniteScroll",
  component: InfiniteScroll,
} as Meta;

export const Usage = () => {
  const [count, setCount] = React.useState(10);

  return (
    <InfiniteScroll
      itemsLength={count}
      hasMoreItems={count < 50}
      onRequestMoreItems={() => {
        setCount(count + 10);
      }}
    >
      {new Array(count).fill(undefined).map((_, index) => (
        <div style={{ paddingBottom: 50 }} key={index}>{`Title ${index}`}</div>
      ))}
    </InfiniteScroll>
  );
};
