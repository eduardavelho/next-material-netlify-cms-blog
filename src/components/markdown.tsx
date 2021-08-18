import React from "react";
import { markdownStyles } from "../utils/markdown-styles";

export interface MarkdownProps {
  content: string;
}

export function Markdown({ content }: MarkdownProps) {
  const markdownClasses = markdownStyles();

  return (
    <div
      className={markdownClasses.markdown}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
