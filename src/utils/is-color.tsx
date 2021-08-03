export function isColor(color: string) {
  return (
    isHex(color) ||
    isRgb(color) ||
    isRgba(color) ||
    isHsl(color) ||
    isHsla(color)
  );
}

const isHex = (color: string) => !!color.match(/^#([0-9a-f]{3}){1,2}$/i);

const isRgb = (color: string) =>
  !!color.match(/rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/);

const isRgba = (color: string) =>
  !!color.match(/rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/);

const isHsl = (color: string) =>
  !!color.match(/hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/);

const isHsla = (color: string) =>
  !!color.match(/hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/);
