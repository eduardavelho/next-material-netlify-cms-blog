import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { MasonryGrid } from "./masonry-grid";
import { PostCard } from "./post-card";

export interface ContentCardsProps {
  title?: string;
  subtitle?: string;
  titleColor?: string;
  cards: CardItem[];
}

interface CardItem {
  key: React.Key;
  title?: string;
  content?: string;
  href: string;
  image: string;
}

export function ContentCards({
  title,
  subtitle,
  titleColor,
  cards,
}: ContentCardsProps) {
  const theme = useTheme();
  const styles = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const color = titleColor || theme.palette.primary.main;

  return (
    <Box
      paddingY={isDesktop ? 16 : 8}
      paddingX={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      style={{
        backgroundSize: "cover",
      }}
    >
      <Box maxWidth={960} marginX="auto">
        {title && (
          <Box marginBottom={subtitle ? 1 : 4}>
            <Typography
              align="center"
              variant={isDesktop ? "h2" : "h4"}
              component="h2"
              style={{
                color,
              }}
            >
              {title}
            </Typography>
          </Box>
        )}
        {subtitle && (
          <Box marginBottom={4}>
            <Typography
              variant={isDesktop ? "h5" : "subtitle1"}
              align="center"
              component="h3"
              color="textPrimary"
            >
              {subtitle}
            </Typography>
          </Box>
        )}
        <Box className={styles.cards}>
          <MasonryGrid spacing={theme.spacing(2)} xs={2} md={2} lg={3} xl={3}>
            {cards.map(({ key, title, content, image, href }) => (
              <PostCard
                key={key}
                title={title}
                subtitle={content}
                image={image}
                href={href}
                titleColor={color}
              />
            ))}
          </MasonryGrid>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  cards: {
    "& .MuiButtonBase-root": {
      height: "256px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    "& .MuiButtonBase-root .MuiCardMedia-root": {
      width: "100%",
    },
  },
}));
