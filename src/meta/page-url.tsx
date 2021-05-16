import React from "react";
import Head from "next/head";

export interface MetaPageUrlProps {
  url: string;
}

export function MetaPageUrl({ url }: MetaPageUrlProps) {
  return (
    <Head>
      <meta key="og-url" property="og:url" content={url} />
      <link key="canonical" rel="canonical" href={url} />
    </Head>
  );
}
