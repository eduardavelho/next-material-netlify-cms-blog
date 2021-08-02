import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export interface ItemListProps {
  title?: string;
  titleColor?: string;
  background?: string;
  backgroundIsDark?: boolean;
  items: Item[];
}

interface Item {
  text: string;
  image: string;
}

export function ItemList({
  title,
  titleColor,
  background,
  backgroundIsDark,
  items,
}: ItemListProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      paddingY={16}
      paddingX={2}
      style={{
        background: background || theme.palette.primary.main,
        color: backgroundIsDark ? "rgba(255, 255, 255, 0.8)" : "inherit",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        maxWidth={720}
        marginX="auto"
      >
        {title && (
          <Box
            marginBottom={4}
            color={titleColor || theme.palette.primary.contrastText}
          >
            <Typography
              align="center"
              variant={isDesktop ? "h3" : "h4"}
              component="h1"
            >
              {title}
            </Typography>
          </Box>
        )}
        {items.map(({ text, image }: Item, index) => (
          <Box
            key={`item-list-${index}`}
            marginBottom={items.length - 1 === index ? 0 : 8}
            width="100%"
          >
            <InfoView text={text} image={image} reverse={index % 2 !== 0} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function InfoViewImage({ image, text }: { image: string; text: string }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <img
      src={image}
      alt=""
      style={{
        width: isDesktop ? 128 : 72,
        height: isDesktop ? 128 : 72,
        borderRadius: isDesktop ? 64 : 36,
        objectFit: "cover",
      }}
    />
  );
}

function InfoViewText({ text, reverse }: { text: string; reverse?: boolean }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box display="flex" alignItems="center" flexGrow={1}>
      <Typography
        variant={isDesktop ? "h5" : "body1"}
        component="p"
        align={reverse === true ? "right" : undefined}
        style={{
          width: "100%",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

function InfoView({
  text,
  image,
  reverse,
}: {
  text: string;
  image: string;
  reverse?: boolean;
}) {
  if (reverse) {
    return (
      <Box display="flex" alignItems="center">
        <InfoViewText text={text} reverse />
        <Box marginLeft={2}>
          <InfoViewImage image={image} text={text} />
        </Box>
      </Box>
    );
  } else {
    return (
      <Box display="flex" alignItems="center">
        <Box marginRight={2}>
          <InfoViewImage image={image} text={text} />
        </Box>
        <InfoViewText text={text} />
      </Box>
    );
  }
}
