import React from "react";
import { PageMeta, App } from "../types";
import { MetaAuthor } from "./author";
import { MetaDescription } from "./description";
import { MetaImage } from "./image";
import { MetaKeywords } from "./keywords";
import { MetaMisc } from "./misc";
import { MetaPageUrl } from "./page-url";
import { MetaTitle } from "./title";

export type MetaProps = PageMeta & App;

export function Meta(props: MetaProps) {
  return (
    <>
      <MetaAuthor author={props.developerName} />
      <MetaDescription description={props.description} />
      <MetaImage image={props.image} />
      <MetaKeywords keywords={props.keywords} />
      <MetaPageUrl url={props.url} />
      <MetaTitle title={props.name} />
      <MetaMisc
        facebookAppId={props.facebookAppId}
        twitterAt={props.twitterAt}
        name={props.name}
        dashColor={props.dashColor}
        url={props.url}
      />
    </>
  );
}
