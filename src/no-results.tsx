import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export interface NoResultsProps {
  noResultsText: React.ReactNode;
}

export function NoResults({ noResultsText }: NoResultsProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box width="100%" textAlign="center" paddingY={isDesktop ? 8 : 4}>
      <Typography
        variant={isDesktop ? "h5" : "h6"}
        component="span"
        style={{
          fontWeight: 400,
        }}
      >
        {noResultsText}
      </Typography>
    </Box>
  );
}
