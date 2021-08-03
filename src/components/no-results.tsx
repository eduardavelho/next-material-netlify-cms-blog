import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export interface NoResultsProps {
  noResultsText: React.ReactNode;
  noResultsDescription: React.ReactNode;
}

export function NoResults({
  noResultsText,
  noResultsDescription,
}: NoResultsProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box width="100%" textAlign="center">
      <Box marginBottom={0.8}>
        <Typography
          variant={isDesktop ? "h4" : "h5"}
          component="div"
          style={{
            fontWeight: 400,
            lineHeight: "1.1",
          }}
        >
          {noResultsText}
        </Typography>
      </Box>
      <Typography variant={isDesktop ? "body1" : "body2"} component="div">
        {noResultsDescription}
      </Typography>
    </Box>
  );
}
