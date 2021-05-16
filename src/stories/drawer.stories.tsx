import React from "react";
import { Meta } from "@storybook/react";
import Button from "@material-ui/core/Button";
import AlarmOffIcon from "@material-ui/icons/AlarmOff";
import { Drawer } from "../components/drawer";

export default {
  title: "Example/Drawer",
  component: Drawer,
} as Meta;

export const Usage = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setDrawerOpen(true)}>Click me</Button>
      <Drawer
        setDrawerOpen={setDrawerOpen}
        itemsAriaLabel="Drawer items"
        drawerOpen={drawerOpen}
        items={[
          { href: "/", label: "Alarm Off", Icon: AlarmOffIcon },
          { href: "/a", label: "Alarm Off 2", Icon: AlarmOffIcon },
          {
            href: "/",
            label: "Alarm Off 3",
            Icon: AlarmOffIcon,
          },
        ]}
      />
    </>
  );
};
