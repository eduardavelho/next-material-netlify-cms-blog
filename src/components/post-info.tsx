import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { SocialIcons, SocialIconsProps } from "./social-icons";

export type PostInfoProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  date?: Date;
  dateText?: string;
  authorName?: string;
  authorPicture?: string;
  authorDescription?: string;
  tags?: string[];
  titleColor?: string;
  backgroundIsDark?: boolean;
} & SocialIconsProps;

export function PostInfo({
  title,
  description,
  date,
  dateText,
  authorName,
  authorPicture,
  authorDescription,
  tags,
  titleColor,
  backgroundIsDark,
  ...socialIconsProps
}: PostInfoProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const haveSocialIconsProps = Object.keys(socialIconsProps).length > 0;

  return (
    <Box>
      {tags !== undefined && tags.length > 0 && (
        <Box marginBottom={isDesktop ? undefined : 2}>
          {tags.map((tag, index) => (
            <Chip
              key={`post-info-chip-${index}`}
              size="small"
              label={tag}
              style={{
                marginBottom: theme.spacing(0.3),
                marginRight: theme.spacing(0.3),
                backgroundColor: backgroundIsDark
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.1)",
                color: backgroundIsDark
                  ? theme.palette.common.white
                  : undefined,
              }}
            />
          ))}
        </Box>
      )}
      <Box marginBottom={isDesktop ? 0.4 : 0.6}>
        <Typography
          variant={isDesktop ? "h3" : "h5"}
          component="h1"
          style={{
            lineHeight: 1.1,
            fontWeight: isDesktop ? undefined : "bold",
            color: titleColor || theme.palette.primary.main,
          }}
        >
          {title}
        </Typography>
      </Box>
      {description && (
        <Box>
          <Typography
            variant={isDesktop ? "subtitle1" : "body2"}
            component="h2"
            style={{
              color: backgroundIsDark ? "rgba(255, 255, 255, 0.8)" : undefined,
            }}
          >
            {description}
          </Typography>
        </Box>
      )}
      <Box
        display="flex"
        flexDirection={isDesktop ? "row" : "column"}
        marginTop={isDesktop ? 3 : undefined}
      >
        {authorName && (
          <Box display="flex" flex={1} marginTop={isDesktop ? undefined : 3}>
            <ListItem
              component="div"
              alignItems="flex-start"
              style={{
                padding: 0,
              }}
            >
              <ListItemAvatar>
                <Avatar alt={authorName} src={authorPicture} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <span
                    style={{ color: titleColor || theme.palette.primary.main }}
                  >
                    {authorName}
                  </span>
                }
                secondary={
                  <Box
                    color={
                      backgroundIsDark ? "rgba(255, 255, 255, 0.8)" : undefined
                    }
                  >
                    {authorDescription}
                    {date !== undefined && (
                      <Box>
                        <Typography
                          variant="caption"
                          component="time"
                          dateTime={date.toISOString()}
                        >
                          {dateText || date.toLocaleString()}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                }
              />
            </ListItem>
          </Box>
        )}
        {haveSocialIconsProps && (
          <Box
            display="flex"
            justifyContent={isDesktop ? undefined : "center"}
            alignItems={isDesktop ? "center" : undefined}
            marginTop={isDesktop ? undefined : 3}
          >
            <SocialIcons {...socialIconsProps} />
          </Box>
        )}
      </Box>
    </Box>
  );
}
