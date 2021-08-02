import React from "react";
import { Meta } from "@storybook/react";
import AlarmOffIcon from "@material-ui/icons/AlarmOff";
import { Dash, DashProps } from "../components/dash";

export default {
  title: "Example/Dash",
  component: Dash,
} as Meta;

export const Usage = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [snackbarContent, setSnackbarContent] = React.useState({
    message: undefined,
    severity: "info",
  } as DashProps["snackbarContent"]);

  return (
    <Dash
      appBarBackgroundColor="red"
      appBarItemsAriaLabel="Items"
      appBarColor="yellow"
      drawerButtonAriaLabel="Drawer button"
      logo="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
      shortName="App name"
      setDrawerOpen={setDrawerOpen}
      appBarItems={[
        { label: "Link A", href: "/" },
        { label: "Link B", href: "/" },
        { label: "Link C", href: "/" },
      ]}
      bottomNavigationItems={[
        { href: "/", label: "Alarm Off", Icon: AlarmOffIcon },
        { href: "/a", label: "Alarm Off 2", Icon: AlarmOffIcon },
        { href: "/b", label: "Alarm Off 3", Icon: AlarmOffIcon },
      ]}
      drawerItems={[
        { href: "/", label: "Alarm Off", Icon: AlarmOffIcon },
        { href: "/a", label: "Alarm Off 2", Icon: AlarmOffIcon },
        {
          onClick() {
            setSnackbarContent({
              message: "Message here",
              severity: "info",
            });
          },
          label: "Show snackbar",
          Icon: AlarmOffIcon,
        },
      ]}
      drawerItemsAriaLabel="Drawer items"
      drawerOpen={drawerOpen}
      footerItems={[
        { label: "Link A", href: "/" },
        { label: "Link B", href: "/" },
        { label: "Link C", href: "/" },
        { label: "Link D", href: "/" },
        { label: "Link E", href: "/" },
        { label: "Link F", href: "/" },
      ]}
      footerItemsAriaLabel="Footer items"
      setSnackbarContent={setSnackbarContent}
      snackbarContent={snackbarContent}
      footerBackgroundColor="green"
      footerColor="red"
    >
      <div>Content goes here</div>
    </Dash>
  );
};
