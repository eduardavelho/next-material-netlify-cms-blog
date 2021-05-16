import React from "react";
import { Meta } from "@storybook/react";
import { ItemList } from "../components/item-list";

export default {
  title: "Example/ItemList",
  component: ItemList,
} as Meta;

export const Usage = () => (
  <ItemList
    background="red"
    titleColor="yellow"
    title="Item area title"
    backgroundIsDark={false}
    items={[
      {
        text: "Some text here",
        image:
          "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
      },
      {
        text: "Another text here",
        image:
          "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
      },
      {
        text: "And finally more text here",
        image:
          "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
      },
    ]}
  />
);
