import React from "react";
import { Meta } from "@storybook/react";
import { ContentCards } from "../components/content-cards";

export default {
  title: "Example/ContentCards",
  component: ContentCards,
} as Meta;

export const Usage = () => {
  return (
    <ContentCards
      title="Title goes here"
      subtitle="Subtitle right there"
      titleColor="green"
      cards={[
        {
          title: "Card A",
          content: "Some description here",
          image:
            "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
          href: "/",
        },
        {
          title: "Card B",
          content: "Some description here",
          image:
            "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
          href: "/",
        },
        {
          title: "Card C",
          content: "Some description here",
          image:
            "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
          href: "/",
        },
      ]}
    />
  );
};
