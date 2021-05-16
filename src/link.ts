import { NextApiRequest } from "next";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { Json } from "./types";

export type ExtractLinkProps<Props> = Props extends Link<
  infer LinkProps,
  any,
  any
>
  ? LinkProps
  : never;

export type ExtractLinkQuery<Query> = Query extends Link<
  any,
  infer LinkQuery,
  any
>
  ? LinkQuery
  : never;

export type ExtractLinkHref<Href> = Href extends Link<any, infer LinkHref, any>
  ? LinkHref
  : never;

export interface Link<Props, Query, Href> {
  href: Href;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  label: string;
  longLabel: string;
}

export type Links<Api> = {
  [key in keyof Api]: Link<
    ExtractLinkProps<Api[keyof Api]>,
    ExtractLinkQuery<Api[keyof Api]>,
    ExtractLinkHref<Api[keyof Api]>
  >;
};

export function link<
  Props extends Json = {},
  Query extends NextApiRequest["query"] = {},
  Href extends "withQuery" | undefined = undefined
>(
  href: Href extends "withQuery" ? (query: Query) => string : string,
  Icon: Link<Props, Query, Href>["Icon"],
  label: Link<Props, Query, Href>["label"],
  longLabel: Link<Props, Query, Href>["longLabel"] = label
): Link<
  Props,
  Query,
  Href extends "withQuery" ? (query: Query) => string : string
> {
  return { href, Icon, label, longLabel };
}
