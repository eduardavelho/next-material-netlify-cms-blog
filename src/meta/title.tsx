import React from "react";
import Head from "next/head";

export interface MetaTitleProps {
  title: string;
}

export function MetaTitle({ title }: MetaTitleProps) {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="og-title" property="og:title" content={title} />
      <meta key="twitter-title" name="twitter:title" content={title} />
      <meta
        key="apple-mobile-web-app-title"
        name="apple-mobile-web-app-title"
        content={title}
      />
    </Head>
  );
}
