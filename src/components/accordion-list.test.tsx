import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import { AccordionList } from "./accordion-list";

describe("AccordionList", () => {
  beforeEach(() => {
    render(
      <AccordionList
        items={new Array(3).fill(undefined).map((_, index) => ({
          key: index,
          header: `header ${index}`,
          content: `content ${index}`,
        }))}
        expandIconAriaLabel=""
      />
    );
  });

  it("renders three items", async () => {
    const items = await screen.findAllByText(/header/);
    expect(items).toHaveLength(3);
  });

  it("expand content on click", async () => {
    const header = await screen.findByText(/header 1/);
    header.click();
    const content = await screen.findAllByRole("button", {
      expanded: true,
    });
    expect(content).toHaveLength(1);
  });
});
