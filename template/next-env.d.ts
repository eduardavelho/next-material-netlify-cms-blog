/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next-images" />

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.css" {
  const css: never;
  export default css;
}

declare module "*.svg" {
  const svg: never;
  export default svg;
}
