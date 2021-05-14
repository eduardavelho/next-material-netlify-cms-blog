import React, { ReactNode } from "react";
import { AppProps } from "next/app";
import { Theme } from "@material-ui/core";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import MuiCssBaseline from "@material-ui/core/CssBaseline";

export function app({
  theme,
  Layout,
  ThemeProvider,
  CssBaseline,
}: {
  theme: Theme;
  Layout: ({ children }: { children: ReactNode }) => JSX.Element;
  ThemeProvider: typeof MuiThemeProvider;
  CssBaseline: typeof MuiCssBaseline;
}) {
  return function App({ Component, pageProps }: AppProps) {
    React.useEffect(() => {
      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles) {
        jssStyles.parentElement?.removeChild(jssStyles);
      }
    }, []);

    return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>
    );
  };
}
