import chroma from "chroma-js";
import { ColorScheme, PaletteScales, ThemeColors } from "../types/theme.types";
import {
  getBlackWhiteColorPalette,
  singleColorPalette,
} from "@riccox/colorify";

export const CSSVarPrefix = "--sira-";

export const generateBlackWhite12Shades = (colorScheme: ColorScheme) => {
  const pal = getBlackWhiteColorPalette(12);
  return colorScheme === "light" ? pal : pal.reverse();
};

export const getBlackWhiteCSSVariableMap = (
  colorScheme: ColorScheme
): Record<string, string> => {
  let transformedObj = {};
  const shades = generateBlackWhite12Shades(colorScheme);
  PaletteScales.forEach((scale, i) => {
    transformedObj[`${CSSVarPrefix}colors-bw-${scale}`] = chroma(shades[i])
      .rgb()
      .join(",");
  });
  return transformedObj;
};
export const getBWCSSVariableColorNameClass = (
  colorScheme: ColorScheme
): { ".bw": Record<string, string> } => {
  const transformedObj = {};
  const shades = generateBlackWhite12Shades(colorScheme);
  PaletteScales.forEach((scale, i) => {
    transformedObj[`${CSSVarPrefix}color-${scale}`] = chroma(shades[i])
      .rgb()
      .join(",");
  });
  return {
    [`.bw`]: transformedObj,
  };
};

const generate12Shades = (color: string, colorScheme: ColorScheme) => {
  // generate shades(50~900) of this color
  const pal = singleColorPalette(color, 12);
  return colorScheme === "light" ? pal : pal.reverse();
};

export const themeColors2CSSVariableMap = (
  colorMap: ThemeColors,
  colorScheme: ColorScheme
): Record<string, string> => {
  let transformedObj = {};

  Object.keys(colorMap).map((colorName) => {
    const colorValue = colorMap[colorName];
    const shades = generate12Shades(colorValue, colorScheme);
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
  const shades = generate12Shades(color, colorScheme);
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
