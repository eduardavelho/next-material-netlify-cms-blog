import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Breadcrumbs, BreadcrumbsProps } from "./breadcrumbs";
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
  paper = true,
}: PageProps) {
  const backgroundIsDark = background ? isColorDark(background) : false;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Box
        paddingTop={isDesktop ? 8 : 2}
        paddingBottom={24}
        paddingX={{ xs: 2, sm: 2, md: 6 }}
        color={backgroundIsDark ? theme.palette.common.white : undefined}
        style={{ background: background || theme.palette.primary.main }}
      >
        <Box maxWidth="960px">{header}</Box>
      </Box>
      <Box marginX={{ xs: 2, sm: 2, md: 6 }} marginTop={-20} maxWidth="960px">
        <Box
          color={backgroundIsDark ? theme.palette.common.white : undefined}
          marginBottom={1}
        >
          {breadcrumbs !== undefined && breadcrumbs.length > 0 && (
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          )}
        </Box>
        {paper ? (
          <Box marginBottom={isDesktop ? 6 : 2}>
            <Paper elevation={6}>
              <Box>{children}</Box>
            </Paper>
          </Box>
        ) : (
          children
        )}
      </Box>
    </>
  );
}
