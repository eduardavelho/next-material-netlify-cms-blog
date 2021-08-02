import React from "react";
import { Meta } from "@storybook/react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar } from "../components/app-bar";

export default {
  title: "Example/AppBar",
  component: AppBar,
} as Meta;

export const Usage = () => {
  return (
    <AppBar
      backgroundColor="red"
      itemsAriaLabel="Items"
      color="yellow"
      drawerButtonAriaLabel="Drawer button"
      logo="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
      shortName="App name"
      setDrawerOpen={() => {
        alert("Drawer open");
      }}
      drawerIcon={MenuIcon}
      items={[
        { key: 1, label: "Link A", href: "/" },
        { key: 2, label: "Link B", href: "/" },
        { key: 3, label: "Link C", href: "/" },
      ]}
    />
  );
};
