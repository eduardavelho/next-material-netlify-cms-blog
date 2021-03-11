import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import MuiLink from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export interface PageProps {
  header: React.ReactNode;
  children: React.ReactNode;
  breadcrumbs?: [React.ReactNode, string][];
  background?: string;
  dark?: boolean;
  paper?: boolean;
}

export function Page({
  header,
  children,
  breadcrumbs,
  background,
  dark,
  paper = true,
}: PageProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const styles = useStyles({ isDesktop });

  return (
    <>
      <Box
        paddingTop={isDesktop ? 8 : 2}
        paddingBottom={24}
        paddingX={{ xs: 2, sm: 2, md: 6 }}
        color={dark ? theme.palette.common.white : undefined}
        style={{ background: background ?? theme.palette.primary.main }}
      >
        <Box maxWidth="960px">{header}</Box>
      </Box>
      <Box marginX={{ xs: 2, sm: 2, md: 6 }} marginTop={-20} maxWidth="960px">
        <Box
          color={dark ? theme.palette.common.white : undefined}
          marginBottom={1}
        >
          {breadcrumbs !== undefined && (
            <Breadcrumbs
              className={styles.root}
              color="inherit"
              separator={<NavigateNextIcon fontSize="small" />}
            >
              {breadcrumbs.map(([label, href], index) => (
                <Link
                  href={href}
                  passHref
                  key={`page-breadcrumb-link-${index}`}
                >
                  <MuiLink color="inherit">{label}</MuiLink>
                </Link>
              ))}
            </Breadcrumbs>
          )}
        </Box>
        {paper ? (
          <Box marginBottom={isDesktop ? 6 : 2}>
            <Paper elevation={6}>
              <Box padding={{ xs: 2, sm: 2, md: 3 }}>
                <Box>{children}</Box>
              </Box>
            </Paper>
          </Box>
        ) : (
          children
        )}
      </Box>
    </>
  );
}

const useStyles = makeStyles({
  root: {
    "& .MuiBreadcrumbs-ol": {
      justifyContent: ({ isDesktop }: { isDesktop: boolean }) =>
        isDesktop ? "start" : "center",
    },
  },
});
