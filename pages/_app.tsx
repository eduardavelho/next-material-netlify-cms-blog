import { ReactNode, useContext } from "react";
import dynamic from "next/dynamic";
import { app } from "@egvelho/next-material-components";
import { Meta, MetaProps } from "@egvelho/next-material-components/meta";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "app/theme";
import { ContextProvider, Context } from "app/context";
import Dash from "app/dash";
import links from "app/links";
import appConfig from "app.json";
import "typeface-roboto";
import "material-icons/css/material-icons.css";

const DynamicWithFirebase = dynamic(
  async () =>
    (await import("@egvelho/next-material-components/firebase/with-firebase"))
      .WithFirebase,
  { ssr: false }
);

const DynamicWithFirebaseNotifications = dynamic(
  async () =>
    (
      await import(
        "@egvelho/next-material-components/firebase/with-firebase-notifications"
      )
    ).WithFirebaseNotifications,
  { ssr: false }
);

function Layout({ children }: { children: ReactNode }) {
  return (
    <ContextProvider>
      <NestedLayout>{children}</NestedLayout>
    </ContextProvider>
  );
}

function NestedLayout({ children }: { children: ReactNode }) {
  const { context, setContext } = useContext(Context);

  return (
    <>
      <Meta
        {...(appConfig as MetaProps)}
        url={links.index.href}
        image="/android-chrome-512x512.png"
        keywords={[]}
      />
      <DynamicWithFirebase analytics />
      {context.withNotifications && <DynamicWithFirebaseNotifications />}
      <Dash
        snackbarContent={context.snackbarContent}
        setSnackbarContent={(snackbarContent) =>
          setContext({ snackbarContent })
        }
      >
        {children}
      </Dash>
    </>
  );
}

export default app({
  Layout,
  ThemeProvider,
  CssBaseline,
  theme,
});
