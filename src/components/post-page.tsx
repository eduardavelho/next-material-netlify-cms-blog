import React from "react";
import Box from "@material-ui/core/Box";
import { PostInfo, PostInfoProps } from "./post-info";
import { Page, PageProps } from "./page";

export type PostPageProps = PostInfoProps &
  Omit<PageProps, "header" | "backgroundIsDark">;

export function PostPage({
  children,
  background,
  backgroundIsDark,
  paper,
  breadcrumbs,
  ...postInfoProps
}: PostPageProps) {
  const pageProps = {
    background,
    backgroundIsDark,
    paper,
    breadcrumbs,
  };

  return (
    <Page
      {...pageProps}
      backgroundIsDark={backgroundIsDark}
      header={
        <PostInfo {...postInfoProps} backgroundIsDark={backgroundIsDark} />
      }
    >
      <Box padding={{ xs: 2, sm: 6, md: 12 }} maxWidth="720px">
        {children}
      </Box>
    </Page>
  );
}
