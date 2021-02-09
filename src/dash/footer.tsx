import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Link from "next/link";

export interface FooterProps {
  backgroundColor: string;
  color: string;
  linksAriaLabel: string;
  links: { label: string; link: string }[];
}

export function Footer({
  backgroundColor,
  color,
  linksAriaLabel,
  links,
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
          arial-label={linksAriaLabel}
          value={false}
        >
          {links.map(({ label, link }, index) => (
            <Link href={link} passHref key={`footer-link-${index}`}>
              <Tab component="a" label={label} />
            </Link>
          ))}
        </Tabs>
      </nav>
    </footer>
  );
}
