import React from "react";
import Box from "@material-ui/core/Box";
import Chip, { ChipProps } from "@material-ui/core/Chip";
import GetAppIcon from "@material-ui/icons/GetApp";

export interface AttachmentListProps {
  items: { title: string; href: string }[];
  itemColor?: ChipProps["color"];
}

export function AttachmentList({
  items,
  itemColor = "secondary",
}: AttachmentListProps) {
  return (
    <Box flexWrap="wrap" display="flex" marginTop={2}>
      {items.map(({ title, href }, index) => (
        <Box
          key={`attachment-item-${index}`}
          marginRight={0.5}
          marginBottom={0.5}
        >
          <Chip
            color={itemColor}
            component="a"
            download={title}
            href={href}
            label={title}
            icon={<GetAppIcon />}
            style={{
              cursor: "pointer",
            }}
          />
        </Box>
      ))}
    </Box>
  );
}
