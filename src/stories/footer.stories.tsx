import React from "react";
import { Meta } from "@storybook/react";
import { Footer } from "../footer";

export default {
  title: "Example/Footer",
  component: Footer,
} as Meta;

export const Usage = () => {
  return (
    <Footer
      items={[
        { label: "Link A", href: "/" },
        { label: "Link B", href: "/" },
        { label: "Link C", href: "/" },
        { label: "Link D", href: "/" },
        { label: "Link E", href: "/" },
        { label: "Link F", href: "/" },
      ]}
      itemsAriaLabel="Footer items"
      backgroundColor="red"
      color="blue"
    />
  );
};
