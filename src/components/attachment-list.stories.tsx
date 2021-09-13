import React from "react";
import { Meta } from "@storybook/react";
import { AttachmentList } from "./attachment-list";

export default {
  title: "Example/AttachmentList",
  component: AttachmentList,
} as Meta;

export const Usage = () => {
  return (
    <AttachmentList
      items={[
        {
          key: 1,
          title: "Doge meme A",
          href:
            "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
        },
        {
          key: 2,
          title: "Doge meme B",
          href:
            "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
        },
      ]}
    />
  );
};
