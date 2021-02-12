import React from "react";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import MuiBottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Link from "next/link";

type Item = {
  label: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
} & ({ href: string } | { onClick: () => void });

export interface BottomNavigationProps {
  color: string;
  items: Item[];
}

export function BottomNavigation({ items, color }: BottomNavigationProps) {
  return (
    <MuiBottomNavigation
      style={{
        width: "100%",
        position: "sticky",
        bottom: 0,
        color,
      }}
      showLabels
    >
      {items.map(({ label, Icon, ...item }, index) =>
        "href" in item ? (
          <Link
            href={item.href}
            passHref
            key={`bottom-navigation-item-${index}`}
          >
            <BottomNavigationAction
              component="a"
              label={label}
              icon={<Icon />}
              showLabel
            />
          </Link>
        ) : (
          <BottomNavigationAction
            key={`bottom-navigation-item-${index}`}
            onClick={item.onClick}
            label={label}
            icon={<Icon />}
            showLabel
          />
        )
      )}
    </MuiBottomNavigation>
  );
}
