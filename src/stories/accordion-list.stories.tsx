import React from "react";
import { Meta } from "@storybook/react";
import { AccordionList } from "../accordion-list";

export default {
  title: "Example/AccordionList",
  component: AccordionList,
} as Meta;

export const Usage = () => {
  return (
    <AccordionList
      expandIconAriaLabel="Show more"
      items={[
        { header: "Item A", htmlContent: "<h1>Content A</h1>" },
        { header: "Item B", htmlContent: "<h1>Content B</h1>" },
        { header: "Item C", htmlContent: "<h1>Content C</h1>" },
      ]}
    />
  );
};
