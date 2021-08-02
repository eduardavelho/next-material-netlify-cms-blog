import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MuiLink from "@material-ui/core/Link";
import MuiBreadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export interface BreadcrumbsProps {
  breadcrumbs: { key: React.Key; label: React.ReactNode; href: string }[];
}

export function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const styles = useStyles({ isDesktop });

  return (
    <MuiBreadcrumbs
      className={styles.root}
      color="inherit"
      separator={<NavigateNextIcon fontSize="small" />}
    >
      {breadcrumbs.map(({ key, label, href }) => (
        <Link href={href} passHref key={key}>
          <MuiLink color="inherit">{label}</MuiLink>
        </Link>
      ))}
    </MuiBreadcrumbs>
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
