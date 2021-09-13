import React from "react";
import { Meta } from "@storybook/react";
import { Footer } from "./footer";

export default {
  title: "Example/Footer",
  component: Footer,
} as Meta;

export const Usage = () => {
  return (
    <Footer
      items={[
        { key: 1, label: "Link A", href: "/" },
        { key: 2, label: "Link B", href: "/" },
        { key: 3, label: "Link C", href: "/" },
        { key: 4, label: "Link D", href: "/" },
        { key: 5, label: "Link E", href: "/" },
        { key: 6, label: "Link F", href: "/" },
      ]}
      itemsAriaLabel="Footer items"
      backgroundColor="red"
      color="blue"
    />
  );
};
