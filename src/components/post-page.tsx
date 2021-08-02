import React from "react";
import Box from "@material-ui/core/Box";
import { PostInfo, PostInfoProps } from "./post-info";
import { Page, PageProps } from "./page";
import { isColorDark } from "../utils/is-color-dark";

export type PostPageProps = PostInfoProps & Omit<PageProps, "header">;

export function PostPage({
  children,
  background,
  paper,
  breadcrumbs,
  ...postInfoProps
}: PostPageProps) {
  const backgroundIsDark = background ? isColorDark(background) : false;

  const pageProps = {
    background,
    paper,
    breadcrumbs,
    backgroundIsDark,
  };

  return (
    <Page {...pageProps} header={<PostInfo {...postInfoProps} />}>
      <Box padding={{ xs: 2, sm: 6, md: 12 }} maxWidth="720px">
        {children}
      </Box>
    </Page>
  );
}
