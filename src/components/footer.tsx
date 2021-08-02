import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Link from "next/link";

type Item = { key: React.Key; label: string } & (
  | { href: string }
  | { onClick: () => void }
);

export interface FooterProps {
  backgroundColor: string;
  color: string;
  itemsAriaLabel: string;
  items: Item[];
}

export function Footer({
  backgroundColor,
  color,
  itemsAriaLabel,
  items,
}: FooterProps) {
  return (
    <footer
      style={{
        backgroundColor,
        color,
      }}
    >
      <nav>
        <Tabs
          variant="scrollable"
          scrollButtons="on"
          arial-label={itemsAriaLabel}
          value={false}
        >
          {items.map((item) =>
            "href" in item ? (
              <Link href={item.href} passHref key={item.key}>
                <Tab component="a" label={item.label} />
              </Link>
            ) : (
              <Tab
                key={item.key}
                label={item.label}
                onClick={item.onClick}
                style={{
                  cursor: "pointer",
                }}
              />
            )
          )}
        </Tabs>
      </nav>
    </footer>
  );
}
