import React from "react";
import Card, { CardProps } from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { useTheme } from "@material-ui/core/styles";
import { SocialIcons, SocialIconsProps } from "./social-icons";

export type ScholarCardProps = {
  name: string;
  resume: string;
  degree: string;
  picture?: string;
  color?: string;
  tags?: string[];
  lattesHref?: string;
  elevation?: CardProps["elevation"];
} & SocialIconsProps;

export function ScholarCard({
  name,
  resume,
  degree,
  picture,
  color,
  tags,
  lattesHref,
  elevation,
  ...socialIconsProps
}: ScholarCardProps) {
  const theme = useTheme();
  const haveSocialIconsProps = Object.keys(socialIconsProps).length > 0;

  return (
    <Card elevation={elevation}>
      <CardContent
        style={{
          padding: "16px",
        }}
      >
        {tags !== undefined && tags.length > 0 && (
          <Box>
            {tags.map((tag, index) => (
              <Chip
                key={`scholar-card-chip-${index}`}
                size="small"
                label={tag}
                style={{
                  marginBottom: theme.spacing(0.3),
                  marginRight: theme.spacing(0.3),
                }}
              />
            ))}
          </Box>
        )}
        <ListItem
          component="div"
          alignItems="flex-start"
          style={{
            padding: 0,
          }}
        >
          <ListItemAvatar>
            <Avatar alt={name} src={picture} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <span style={{ color: color ?? theme.palette.primary.main }}>
                {name}
              </span>
            }
            secondary={degree}
          />
        </ListItem>
        <Box marginY={2}>
          <Typography variant="body2">{resume}</Typography>
        </Box>
        {haveSocialIconsProps && (
          <Box display="flex" justifyContent="center" alignItems="center">
            <SocialIcons {...socialIconsProps} />
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
