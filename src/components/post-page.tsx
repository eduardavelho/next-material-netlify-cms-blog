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
      <Box maxWidth="720px" marginX="auto">
        {children}
      </Box>
    </Page>
  );
}
