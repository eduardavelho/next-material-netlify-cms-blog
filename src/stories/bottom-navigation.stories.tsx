import React from "react";
import { Meta } from "@storybook/react";
import AlarmOffIcon from "@material-ui/icons/AlarmOff";
import { BottomNavigation } from "../components/bottom-navigation";

export default {
  title: "Example/BottomNavigation",
  component: BottomNavigation,
} as Meta;

export const Usage = () => {
  return (
    <BottomNavigation
      items={[
        { href: "/", label: "Alarm Off", Icon: AlarmOffIcon },
        { href: "/a", label: "Alarm Off 2", Icon: AlarmOffIcon },
        { href: "/b", label: "Alarm Off 3", Icon: AlarmOffIcon },
      ]}
    />
  );
};
