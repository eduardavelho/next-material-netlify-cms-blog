import { getContrastRatio } from "@material-ui/core";

export function isColorDark(color: string, contrastThreshold: number = 3) {
  return getContrastRatio(color, "#fff") >= contrastThreshold ? true : false;
}
