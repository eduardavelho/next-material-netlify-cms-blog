import React from "react";
import { Meta } from "@storybook/react";
import { AccordionList } from "./accordion-list";

export default {
  title: "Example/AccordionList",
  component: AccordionList,
} as Meta;

export const Usage = () => {
  return (
    <AccordionList
      expandIconAriaLabel="Show more"
      items={[
        { key: 1, header: "Item A", content: <h1>Content A</h1> },
        { key: 2, header: "Item B", content: <h1>Content B</h1> },
        { key: 3, header: "Item C", content: <h1>Content C</h1> },
      ]}
    />
  );
};
