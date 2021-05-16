import React from "react";
import Head from "next/head";

export interface MetaAuthorProps {
  author: string;
}

export function MetaAuthor({ author }: MetaAuthorProps) {
  return (
    <Head>
      <meta key="author" name="author" content={author} />
    </Head>
  );
}
