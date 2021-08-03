import React from "react";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import { PostInfo, PostInfoProps } from "./post-info";
import { Page, PageProps } from "./page";
import { isColor } from "../utils/is-color";
import { isColorDark } from "../utils/is-color-dark";

export type PostPageProps = Omit<PostInfoProps, "backgroundIsDark"> &
  Omit<PageProps, "header">;

export function PostPage({
  children,
  background,
  paper,
  breadcrumbs,
  ...postInfoProps
}: PostPageProps) {
  const theme = useTheme();
  const backgroundIsDark = background
    ? isColor(background) && isColorDark(background)
    : isColorDark(theme.palette.primary.main);

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
