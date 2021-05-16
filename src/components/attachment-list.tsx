import React from "react";
import Box from "@material-ui/core/Box";
import Chip, { ChipProps } from "@material-ui/core/Chip";
import GetAppIcon from "@material-ui/icons/GetApp";

export interface AttachmentListProps {
  items: [string, string][];
  itemColor?: ChipProps["color"];
}

export function AttachmentList({
  items,
  itemColor = "secondary",
}: AttachmentListProps) {
  return (
    <Box flexWrap="wrap" display="flex" marginTop={2}>
      {items.map(([title, file], index) => (
        <Box
          key={`attachment-item-${index}`}
          marginRight={0.5}
          marginBottom={0.5}
        >
          <Chip
            color={itemColor}
            component="a"
            download={title}
            href={file}
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
