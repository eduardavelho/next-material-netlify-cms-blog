import React from "react";
import { Meta } from "@storybook/react";
import { TitleDescriptionInfo } from "../title-description-info";

export default {
  title: "Example/TitleDescriptionInfo",
  component: TitleDescriptionInfo,
} as Meta;

export const Usage = () => {
  {
    return (
      <TitleDescriptionInfo title="Title here" description="Description here" />
    );
  }
};
