import { MetaPageUrlProps } from "./meta/page-url";
import { MetaImageProps } from "./meta/image";
import { MetaKeywordsProps } from "./meta/keywords";

export type PageMeta = MetaKeywordsProps & MetaImageProps & MetaPageUrlProps;

export interface App {
  name: string;
  shortName: string;
  description: string;
  twitterAt?: string;
  facebookAppId?: string;
  iconPath: string;
  version: string;
  developerName: string;
  developerURL: string;
  backgroundColor: string;
  dashColor: string;
  primaryColor: string;
  secondaryColor: string;
  lang: string;
  orientation: "portrait" | "landscape";
}

export type Json = { [key: string]: any } | Array<any>;

export interface FormInput<Value> {
  value: Value;
  label: string;
  helperText: string;
  error: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (value: Value) => void;
}
