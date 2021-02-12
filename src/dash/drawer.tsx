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

type Item = {
  label: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
} & ({ href: string } | { onClick: () => void });

export interface DrawerProps {
  itemsAriaLabel: string;
  items: Item[];
  drawerOpen: boolean;
  setDrawerOpen: (drawerOpen: boolean) => void;
}

export function Drawer({
  itemsAriaLabel,
  items,
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
          arial-label={itemsAriaLabel}
        >
          {items.map(({ label, Icon, ...item }, index) =>
            "href" in item ? (
              <Link href={item.href} passHref key={`drawer-item-${index}`}>
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
            ) : (
              <ListItem onClick={item.onClick} color="inherit">
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            )
          )}
        </List>
      </nav>
    </MuiDrawer>
  );
}
