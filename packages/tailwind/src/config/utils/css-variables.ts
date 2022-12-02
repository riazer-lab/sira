import chroma from "chroma-js";
import { ColorScheme, PaletteScales, ThemeColors } from "../types/theme.types";
import { singleColorPalette } from "@riccox/colorify";

export const CSSVarPrefix = "--sira-";

const generate12Shades = (hex: string, colorScheme: ColorScheme) => {
  // generate shades(50~900) of this color
  const pal = singleColorPalette(hex, 12);
  return colorScheme === "light" ? pal : pal.reverse();
};

export const colorMap2CSSVariableMap = (
  colorMap: ThemeColors,
  colorScheme: ColorScheme
): Record<string, string> => {
  let transformedObj = {};
  Object.keys(colorMap).map((colorName) => {
    // use hex color string
    const hex = chroma(colorMap[colorName]).hex();
    transformedObj[`${CSSVarPrefix}colors-${colorName}`] = hex;
    const shades = generate12Shades(hex, colorScheme);
    PaletteScales.forEach((scale, i) => {
      transformedObj[`${CSSVarPrefix}colors-${colorName}-${scale}`] = chroma(
        shades[i]
      )
        .rgb()
        .join(",");
    });
  });
  return transformedObj;
};

export const generateCSSVariableColorNameClass = <N extends string>(
  name: N,
  color: string,
  colorScheme: ColorScheme
): { [k in N]: Record<string, string> } => {
  const transformedObj = {};
  // use hex color string
  const hex = chroma(color).hex();
  const shades = generate12Shades(hex, colorScheme);
  PaletteScales.forEach((scale, i) => {
    transformedObj[`${CSSVarPrefix}color-${scale}`] = chroma(shades[i])
      .rgb()
      .join(",");
  });
  // @ts-ignore
  return {
    [`.${name}`]: transformedObj,
  };
};
