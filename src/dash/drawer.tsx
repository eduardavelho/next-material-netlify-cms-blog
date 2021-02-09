import React from "react";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import MuiDrawer from "@material-ui/core/Drawer";
import MuiLink from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "next/link";

export interface DrawerProps {
  linksAriaLabel: string;
  links: {
    link: string;
    label: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  }[];
  drawerOpen: boolean;
  setDrawerOpen: (drawerOpen: boolean) => void;
}

export function Drawer({
  linksAriaLabel,
  links,
  drawerOpen,
  setDrawerOpen,
}: DrawerProps) {
  return (
    <MuiDrawer
      anchor="right"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <nav>
        <List
          style={{ width: 256 }}
          onClick={() => setDrawerOpen(false)}
          arial-label={linksAriaLabel}
        >
          {links.map(({ link, label, Icon }, index) => (
            <Link href={link} passHref key={`drawer-link-${index}`}>
              <ListItem
                component={MuiLink}
                color="inherit"
                style={{ textDecoration: "none" }}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            </Link>
          ))}
        </List>
      </nav>
    </MuiDrawer>
  );
}
