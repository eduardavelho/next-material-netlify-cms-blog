import { ReactNode, useContext } from "react";
import "@egvelho/next-material/typography/typography.css";
import { app } from "@egvelho/next-material/app";
import { Meta, MetaProps } from "@egvelho/next-material/meta/meta";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "app/theme";
import { ContextProvider, Context } from "app/context";
import { Dash } from "app/dash/dash";
import { links } from "app/api";
import appConfig from "app.json";

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
