import React from "react";
import Head from "next/head";

export interface MetaImageProps {
  image: string;
}

export function MetaImage({ image }: MetaImageProps) {
  return (
    <Head>
      <meta key="twitter-image" name="twitter:image" content={image} />
      <meta key="og-image" property="og:image" content={image} />
    </Head>
  );
}
