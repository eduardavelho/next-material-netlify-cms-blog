import React from "react";
import { Meta } from "@storybook/react";
import { PostInfo } from "../post-info";

export default {
  title: "Example/PostInfo",
  component: PostInfo,
} as Meta;

export const Usage = () => {
  return (
    <PostInfo
      titleColor="red"
      socialAnchorTitle="Anchor title"
      dark={false}
      email="email@email.email"
      facebook
      instagram="https://instagram.com/teste"
      lattes="https://lattes.cnpq.br/teste"
      linkedIn
      twitter
      whatsApp
      title="Title here"
      authorDescription="Author description"
      authorName="Author name"
      authorPicture="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
      date={new Date()}
      dateText="15, may, 2021"
      description="Description here"
      largeIcons
      tags={["Tag A", "Tag B", "Tag C"]}
    />
  );
};
