import React from "react";
import Link from "next/link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export type BannerWithButtonProps = {
  title: React.ReactNode;
  label: string;
  color: string;
  background: string;
  image: string;
  darkOverlay?: boolean;
  lightOverlay?: boolean;
} & ({ href: string } | { onClick: () => void });

export function BannerWithButton({
  title,
  label,
  color,
  background,
  image,
  darkOverlay,
  lightOverlay,
  ...buttonProps
}: BannerWithButtonProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const button = (
    <Button
      variant="outlined"
      color="inherit"
      component="a"
      style={{
        borderWidth: "3px",
        borderRadius: "8px",
      }}
      onClick={"onClick" in buttonProps ? buttonProps.onClick : undefined}
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
  );

  return (
    <Box
      style={{
        background,
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
            backgroundColor: darkOverlay
              ? "rgba(0, 0, 0, 0.3)"
              : lightOverlay
              ? "rgba(255, 255, 255, 0.3)"
              : undefined,
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
            {"href" in buttonProps ? (
              <Link href={buttonProps.href} passHref>
                {button}
              </Link>
            ) : (
              button
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
