import React from "react";
import { Meta } from "@storybook/react";
import AlarmOffIcon from "@material-ui/icons/AlarmOff";
import { BottomNavigation } from "./bottom-navigation";

export default {
  title: "Example/BottomNavigation",
  component: BottomNavigation,
} as Meta;

export const Usage = () => {
  return (
    <BottomNavigation
      items={[
        { key: 1, href: "/", label: "Alarm Off", Icon: AlarmOffIcon },
        { key: 2, href: "/a", label: "Alarm Off 2", Icon: AlarmOffIcon },
        { key: 3, href: "/b", label: "Alarm Off 3", Icon: AlarmOffIcon },
      ]}
    />
  );
};
