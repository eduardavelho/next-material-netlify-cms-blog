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
        { key: 1, label: "Link A", href: "/" },
        { key: 2, label: "Link B", href: "/" },
      ]}
      loading={false}
      title="Blog title"
      titleColor="#0f0"
      background="#00f"
      disabled={false}
      hasMorePosts={false}
      noOptionsText="No options"
      noResultsText="No results"
      noResultsDescription="No results description text"
      onRequestMorePosts={() => {}}
      options={["A", "B", "C"]}
      placeholder="Search here"
      posts={new Array(10).fill(undefined).map((_, key) => ({
        key,
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
        tags: [
          { key: 1, tag: "Tag A" },
          { key: 2, tag: "Tag B" },
          { key: 3, tag: "Tag C" },
        ],
        titleColor: "#f00",
        views: 4,
        viewsAriaLabel: "Views",
      }))}
      value={["A"]}
      onChange={async () => {}}
    />
  );
};
