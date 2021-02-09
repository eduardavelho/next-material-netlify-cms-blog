import React from "react";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import MuiBottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Link from "next/link";

export interface BottomNavigationProps {
  color: string;
  links: {
    link: string;
    label: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  }[];
}

export function BottomNavigation({ links, color }: BottomNavigationProps) {
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
      {links.map(({ link, label, Icon }, index) => (
        <Link href={link} passHref key={`bottom-navigation-link-${index}`}>
          <BottomNavigationAction component="a" label={label} icon={<Icon />} />
        </Link>
      ))}
    </MuiBottomNavigation>
  );
}
