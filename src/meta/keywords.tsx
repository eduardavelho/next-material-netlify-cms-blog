import React from "react";
import Head from "next/head";

export interface MetaKeywordsProps {
  keywords: string[];
}

export function MetaKeywords({ keywords }: MetaKeywordsProps) {
  return (
    <Head>
      <meta key="keywords" name="keywords" content={keywords.join(",")} />
    </Head>
  );
}
