import React from "react";
import { Meta } from "@storybook/react";
import { Banner } from "./banner";

export default {
  title: "Example/Banner",
  component: Banner,
} as Meta;

export const Usage = () => {
  return (
    <Banner
      title="Title goes here"
      subtitle="Subtitle is that"
      background="red"
      color="blue"
      image="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
      imageAlt="Doge alt text"
      imageWidth={256}
    />
  );
};
