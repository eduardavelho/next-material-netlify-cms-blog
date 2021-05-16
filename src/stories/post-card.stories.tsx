import React from "react";
import { Meta } from "@storybook/react";
import { PostCard } from "../post-card";

export default {
  title: "Example/PostCard",
  component: PostCard,
} as Meta;

export const Usage = () => {
  return (
    <PostCard
      href="https://google.com"
      image="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
      subtitle="Subtitle here"
      title="Title here"
      authorName="Author name"
      authorPicture="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
      comments={5}
      commentsAriaLabel="Comments"
      date={new Date()}
      dateText="14, may, 2021"
      elevation={9}
      likes={34}
      likesAriaLabel="Likes"
      tags={["Tag A", "Tag B", "Tag C"]}
      titleColor="red"
      views={4}
      viewsAriaLabel="Views"
    />
  );
};
