import React from "react";
import { Meta } from "@storybook/react";
import Button from "@material-ui/core/Button";
import { Snackbar, SnackbarProps } from "../snackbar";

export default {
  title: "Example/Snackbar",
  component: Snackbar,
} as Meta;

export const Usage = () => {
  const [content, setContent] = React.useState({
    message: undefined,
    severity: "error",
  } as SnackbarProps["content"]);

  return (
    <>
      <Button
        onClick={() =>
          setContent({
            message: "Error message here",
            severity: "error",
          })
        }
      >
        Click me
      </Button>
      <Snackbar content={content} setContent={setContent} />
    </>
  );
};
