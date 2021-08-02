import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export interface BannerProps {
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  background?: string;
  color?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}

export function Banner({
  image,
  imageAlt,
  imageWidth = 128,
  background,
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
      color={color || theme.palette.primary.contrastText}
      style={{
        background: background || theme.palette.primary.main,
        backgroundSize: "cover",
      }}
    >
      <Box maxWidth={960} marginX="auto">
        {image && (
          <Box display="flex" alignItems="center" justifyContent="center">
            <img
              src={image}
              alt={imageAlt}
              style={{
                width: imageWidth,
              }}
            />
          </Box>
        )}
        {title && (
          <Box marginBottom={subtitle && 2} marginTop={image && 6}>
            <Typography
              variant={isDesktop ? "h3" : "h4"}
              component="h1"
              align="center"
            >
              {title}
            </Typography>
          </Box>
        )}
        {subtitle && (
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
        )}
      </Box>
    </Box>
  );
}
