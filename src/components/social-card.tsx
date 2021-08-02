import React from "react";
import Card from "@material-ui/core/Card";
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

export type SocialCardProps = {
  name: string;
  nameColor?: string;
  description: string;
  about: string;
  picture?: string;
  tags?: { key: React.Key; tag: string }[];
  elevation?: number;
} & SocialIconsProps;

export function SocialCard({
  name,
  nameColor,
  description,
  about,
  picture,
  tags,
  elevation,
  ...socialIconsProps
}: SocialCardProps) {
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
            {tags.map(({ key, tag }) => (
              <Chip
                key={key}
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
              <span style={{ color: nameColor || theme.palette.primary.main }}>
                {name}
              </span>
            }
            secondary={description}
          />
        </ListItem>
        <Box marginY={2}>
          <Typography variant="body2">{about}</Typography>
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
