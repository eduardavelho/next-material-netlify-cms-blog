import React, { Children } from "react";
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentProps,
} from "next/document";
import { ServerStyleSheets as MuiServerStyleSheets } from "@material-ui/core/styles";

export function document({
  lang,
  ServerStyleSheets,
}: {
  lang: string;
  ServerStyleSheets: typeof MuiServerStyleSheets;
}) {
  return class Document extends NextDocument<DocumentProps> {
    static async getInitialProps(context: DocumentContext) {
      const sheets = new ServerStyleSheets();
      const renderPage = context.renderPage;

      context.renderPage = () =>
        renderPage({
          enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

      const initialProps = await NextDocument.getInitialProps(context);

      return {
        ...initialProps,
        styles: [
          ...Children.toArray(initialProps.styles),
          sheets.getStyleElement(),
        ],
      };
    }

    render() {
      return (
        <Html lang={lang}>
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  };
}
