import React from "react";
import { Meta } from "@storybook/react";
import { BannerWithButton } from "../banner-with-button";

export default {
  title: "Example/BannerWithButton",
  component: BannerWithButton,
} as Meta;

export const Link = () => {
  return (
    <BannerWithButton
      title="Section title here with dark overlay"
      label="I'm a link"
      darkOverlay
      background="green"
      image="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
      titleColor="red"
      href="/"
    />
  );
};

export const Button = () => {
  return (
    <BannerWithButton
      title="Section title here with light overlay"
      label="I'm a button"
      lightOverlay
      background="green"
      image="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
      titleColor="red"
      onClick={() => alert("Hi there!")}
    />
  );
};
