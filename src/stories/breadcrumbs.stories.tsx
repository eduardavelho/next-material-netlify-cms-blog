import React from "react";
import { Meta } from "@storybook/react";
import { Breadcrumbs } from "../components/breadcrumbs";

export default {
  title: "Example/Breadcrumbs",
  component: Breadcrumbs,
} as Meta;

export const Usage = () => {
  return (
    <Breadcrumbs
      breadcrumbs={[
        { key: 1, label: "Home", href: "/" },
        { key: 2, label: "Also home", href: "/" },
      ]}
    />
  );
};
