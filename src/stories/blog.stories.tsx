import React from "react";
import { Meta } from "@storybook/react";
import { Blog } from "../components/blog";

export default {
  title: "Example/Blog",
  component: Blog,
} as Meta;

export const Usage = () => {
  return (
    <Blog
      breadcrumbs={[
        ["Link A", "/"],
        ["Link B", "/"],
      ]}
      loading={false}
      title="Blog title"
      titleColor="green"
      background="blue"
      backgroundIsDark={false}
      disabled={false}
      hasMorePosts={false}
      noOptionsText="No options"
      noResultsText="No results"
      onRequestMorePosts={() => {}}
      options={["A", "B", "C"]}
      placeholder="Search here"
      posts={new Array(10).fill(undefined).map(() => ({
        href: "https://google.com",
        image:
          "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
        subtitle: "Subtitle here",
        title: "Title here",
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
      value={["A"]}
      onChange={async () => {}}
    />
  );
};
