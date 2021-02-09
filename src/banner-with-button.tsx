import React from "react";
import Link from "next/link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export interface BannerWithButtonProps {
  title: string;
  link: string;
  label: string;
  color: string;
  backgroundImage: string;
  image: string;
}

export function BannerWithButton({
  title,
  label,
  link,
  color,
  backgroundImage,
  image,
}: BannerWithButtonProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      style={{
        backgroundImage,
      }}
    >
      <Box
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 80%",
        }}
      >
        <Box
          paddingY={36}
          paddingX={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          color={color}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <Box marginBottom={6} maxWidth={960} marginX="auto">
            <Typography
              variant={isDesktop ? "h2" : "h4"}
              component="h2"
              align="center"
              style={{
                fontWeight: 600,
              }}
            >
              {title}
            </Typography>
          </Box>
          <Box>
            <Link href={link} passHref>
              <Button
                variant="outlined"
                color="inherit"
                component="a"
                style={{
                  borderWidth: "3px",
                  borderRadius: "8px",
                }}
              >
                <Box paddingY={1} paddingX={isDesktop ? 4 : 3}>
                  <Typography
                    variant={isDesktop ? "h5" : "h6"}
                    component="span"
                    align="center"
                    style={{
                      fontWeight: 600,
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
