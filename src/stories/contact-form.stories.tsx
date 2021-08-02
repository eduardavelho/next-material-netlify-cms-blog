import React from "react";
import { Meta } from "@storybook/react";
import { ContactForm } from "../components/contact-form";

export default {
  title: "Example/ContactForm",
  component: ContactForm,
} as Meta;

export const Usage = () => {
  return (
    <ContactForm
      title="Form title"
      background="purple"
      titleColor="green"
      submitButtonLabel="Submit"
      onSubmit={async () => {
        alert("Submit success!");
      }}
      form={{
        name: {
          label: "Name",
          helperText: "Error goes here",
          value: "",
          error: true,
          onBlur: () => {},
          onChange: (value) => {},
          onFocus: () => {},
        },
        email: {
          label: "Email",
          helperText: "Some helper text",
          value: "",
          error: false,
          onBlur: () => {},
          onChange: (value) => {},
          onFocus: () => {},
        },
        phoneNumber: {
          label: "Phone",
          helperText: "Some helper text",
          value: "",
          error: false,
          onBlur: () => {},
          onChange: (value) => {},
          onFocus: () => {},
        },
        message: {
          label: "Message",
          helperText: "Some helper text",
          value: "",
          error: false,
          onBlur: () => {},
          onChange: (value) => {},
          onFocus: () => {},
        },
      }}
      loading={false}
    />
  );
};
