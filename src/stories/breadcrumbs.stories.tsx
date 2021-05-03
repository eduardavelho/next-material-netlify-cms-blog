import React from "react";
import { Meta } from "@storybook/react";
import { Breadcrumbs } from "../breadcrumbs";

export default {
  title: "Example/Breadcrumbs",
  component: Breadcrumbs,
} as Meta;

export const Usage = () => {
  return (
    <Breadcrumbs
      breadcrumbs={[
        ["Home", "/"],
        ["Also home", "/"],
      ]}
    />
  );
};
