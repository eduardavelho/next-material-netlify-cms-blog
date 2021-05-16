import React from "react";
import { Meta } from "@storybook/react";
import { PostCardGrid } from "../post-card-grid";

export default {
  title: "Example/PostCardGrid",
  component: PostCardGrid,
} as Meta;

export const Usage = () => {
  const [count, setCount] = React.useState(10);

  return (
    <PostCardGrid
      hasMorePosts={count < 50}
      onRequestMorePosts={() => {
        setCount(count + 10);
      }}
      posts={new Array(count).fill(undefined).map((_, index) => ({
        href: "https://google.com",
        image:
          "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
        subtitle: "Subtitle here",
        title: `Title here ${index}`,
        authorName: "Author name",
        authorPicture:
          "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
        comments: 5,
        commentsAriaLabel: "Comments",
        date: new Date(),
        dateText: "14, may, 2021",
        elevation: 9,
        likes: 34,
        likesAriaLabel: "Likes",
        tags: ["Tag A", "Tag B", "Tag C"],
        titleColor: "red",
        views: 4,
        viewsAriaLabel: "Views",
      }))}
      titleColor="red"
    />
  );
};
