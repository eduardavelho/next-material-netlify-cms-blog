import React from "react";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import MuiBottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Link from "next/link";
import { useRouter } from "next/router";

type Item = {
  label: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
} & ({ href: string } | { onClick: () => void });

export interface BottomNavigationProps {
  color: string;
  items: Item[];
}

export function BottomNavigation({ items, color }: BottomNavigationProps) {
  const [value, setValue] = React.useState(undefined as string | undefined);
  const router = useRouter();

  React.useEffect(() => {
    items.forEach((item) => {
      if ("href" in item && router.pathname.startsWith(item.href)) {
        setValue(item.href);
      }
    });
  }, []);

  React.useEffect(() => {
    items.forEach((item) => {
      if ("href" in item && item.href.startsWith(router.pathname)) {
        setValue(item.href);
      }
    });
  }, [router.pathname]);

  return (
    <MuiBottomNavigation
      value={value}
      onChange={(_, nextValue) => {
        if (!router.pathname.startsWith(nextValue)) {
          setValue(nextValue);
        }
      }}
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
              value={item.href}
              label={label}
              icon={<Icon />}
              showLabel
            />
          </Link>
        ) : (
          <BottomNavigationAction
            key={`bottom-navigation-item-${index}`}
            value={`bottom-navigation-item-${index}`}
            onClick={item.onClick}
            label={label}
            icon={<Icon />}
            showLabel
            style={{
              cursor: "pointer",
            }}
          />
        )
      )}
    </MuiBottomNavigation>
  );
}
