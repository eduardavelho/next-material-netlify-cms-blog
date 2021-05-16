import React from "react";
import { Meta } from "@storybook/react";
import Button from "@material-ui/core/Button";
import { AlertDialog } from "../components/alert-dialog";

export default {
  title: "Example/AlertDialog",
  component: AlertDialog,
} as Meta;

export const Usage = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Click me</Button>
      <AlertDialog
        title="This is some title"
        description="This is the description with a longer text than the title."
        confirmButtonLabel="Confirm"
        rejectButtonLabel="Reject"
        open={open}
        onRequestClose={() => setOpen(false)}
        onAnswer={(answer) => setOpen(false)}
      />
    </div>
  );
};
