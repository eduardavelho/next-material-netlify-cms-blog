import React from "react";
import { Meta } from "@storybook/react";
import { AttachmentList } from "../attachment-list";

export default {
  title: "Example/AttachmentList",
  component: AttachmentList,
} as Meta;

export const Usage = () => {
  return (
    <AttachmentList
      items={[
        [
          "Doge meme A",
          "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
        ],
        [
          "Doge meme B",
          "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
        ],
      ]}
    />
  );
};
