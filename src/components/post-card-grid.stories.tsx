import React from "react";
import { Meta } from "@storybook/react";
import { PostCardGrid } from "./post-card-grid";

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
      posts={new Array(count).fill(undefined).map((_, key) => ({
        key,
        href: "https://google.com",
        image:
          "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
        subtitle: "Subtitle here",
        title: `Title here ${key}`,
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
        tags: [
          { key: 1, tag: "Tag A" },
          { key: 2, tag: "Tag B" },
          { key: 3, tag: "Tag C" },
        ],
        titleColor: "red",
        views: 4,
        viewsAriaLabel: "Views",
      }))}
      titleColor="red"
    />
  );
};
