import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Breadcrumbs, BreadcrumbsProps } from "./breadcrumbs";
import { isColor } from "../utils/is-color";
import { isColorDark } from "../utils/is-color-dark";

export interface PageProps {
  header: React.ReactNode;
  children: React.ReactNode;
  breadcrumbs?: BreadcrumbsProps["breadcrumbs"];
  background?: string;
  backgroundIsDark?: boolean;
  paper?: boolean;
}

export function Page({
  header,
  children,
  breadcrumbs,
  background,
  paper = false,
}: PageProps) {
  const theme = useTheme();
  const backgroundFallback = theme.palette.primary.main;
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const backgroundIsDark = background
    ? isColor(background) && isColorDark(background)
    : isColorDark(backgroundFallback);

  return (
    <>
      <Box
        paddingTop={isDesktop ? 8 : 2}
        paddingBottom={paper ? 24 : undefined}
        paddingX={{ xs: 2, sm: 2, md: 6 }}
        paddingLeft={{ md: 20 }}
        color={backgroundIsDark ? theme.palette.common.white : undefined}
        style={{ background: background || backgroundFallback }}
      >
        <Box maxWidth="960px">
          <Box paddingBottom={paper ? undefined : isDesktop ? 8 : 2}>
            {header}
          </Box>
          {!paper && breadcrumbs !== undefined && breadcrumbs.length && (
            <Box
              color={backgroundIsDark ? theme.palette.common.white : undefined}
              paddingBottom={isDesktop ? 2 : 1}
            >
              <Breadcrumbs breadcrumbs={breadcrumbs} />
            </Box>
          )}
        </Box>
      </Box>
      <Box bgcolor={paper ? undefined : theme.palette.common.white}>
        <Box
          marginX={{ xs: 2, sm: 2, md: 6 }}
          marginLeft={{ md: 20 }}
          marginTop={paper ? -20 : undefined}
          maxWidth="960px"
        >
          {paper && breadcrumbs !== undefined && breadcrumbs.length && (
            <Box
              color={backgroundIsDark ? theme.palette.common.white : undefined}
              marginBottom={1}
            >
              <Breadcrumbs breadcrumbs={breadcrumbs} />
            </Box>
          )}
          <Box minHeight="80vh">
            {paper ? (
              <Box marginBottom={isDesktop ? 6 : 2}>
                <Paper elevation={6}>
                  <Box>{children}</Box>
                </Paper>
              </Box>
            ) : (
              <Box paddingY={isDesktop ? 6 : 2}>{children}</Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
