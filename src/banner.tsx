import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export interface BannerProps {
  image: string;
  imageAlt: string;
  backgroundImage: string;
  color: string;
  title: string;
  subtitle: string;
}

export function Banner({
  image,
  imageAlt,
  backgroundImage,
  color,
  title,
  subtitle,
}: BannerProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      paddingY={16}
      paddingX={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      color={color}
      style={{
        backgroundImage,
        backgroundSize: "cover",
      }}
    >
      <Box maxWidth={960} marginX="auto">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginBottom={6}
        >
          <img
            src={image}
            alt={imageAlt}
            style={{
              width: 128,
            }}
          />
        </Box>
        <Box marginBottom={2}>
          <Typography
            variant={isDesktop ? "h3" : "h4"}
            component="h1"
            align="center"
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant={isDesktop ? "h4" : "h6"}
            component="h2"
            align="center"
            style={{
              fontWeight: 300,
            }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
