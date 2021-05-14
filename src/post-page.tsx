import React from "react";
import { PostInfo, PostInfoProps } from "./post-info";
import { Page, PageProps } from "./page";
import { markdownStyles } from "./markdown-styles";

export type PostPageProps = PostInfoProps &
  Omit<PageProps, "header" | "children"> & {
    htmlContent: string;
  };

export function PostPage({
  htmlContent,
  background,
  dark,
  paper,
  breadcrumbs,
  ...postInfoProps
}: PostPageProps) {
  const markdownClasses = markdownStyles();

  const pageProps = {
    background,
    dark,
    paper,
    breadcrumbs,
  };

  return (
    <Page {...pageProps} header={<PostInfo {...postInfoProps} dark={dark} />}>
      <article
        className={markdownClasses.markdown}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </Page>
  );
}
