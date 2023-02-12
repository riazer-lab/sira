import chroma from 'chroma-js';
import { ColorScheme, PaletteScales, ThemeColors } from '../types/theme.types';
import { generateRadixColorPalette } from '@riccox/colorify';
import _ from 'lodash';

export const CSSVarPrefix = '--sira-';

export const generateBlackWhite12Shades = (colorScheme: ColorScheme) => {
  return generateRadixColorPalette('#000000', colorScheme);
};

export const getBlackWhiteCSSVariableMap = (colorScheme: ColorScheme): Record<string, string> => {
  let transformedObj = {};
  const shades = generateBlackWhite12Shades(colorScheme);
  PaletteScales.forEach((scale, i) => {
    transformedObj[`${CSSVarPrefix}colors-bw-${scale}`] = chroma(shades[i]).rgb().join(',');
  });
  return transformedObj;
};
export const getBlackWhiteCSSVariableColorNameClass = (colorScheme: ColorScheme): { '.bw': Record<string, string> } => {
  const transformedObj = {};
  const shades = generateBlackWhite12Shades(colorScheme);
  PaletteScales.forEach((scale, i) => {
    transformedObj[`${CSSVarPrefix}color-${scale}`] = chroma(shades[i]).rgb().join(',');
  });
  return {
    [`.bw`]: transformedObj,
  };
};

const generateColorShades = (color: string, colorScheme: ColorScheme) => {
  // generate radix color shades(50~1100) of this color
  return generateRadixColorPalette(color, colorScheme);
};

export const themeColors2CSSVariableMap = (colorMap: ThemeColors, colorScheme: ColorScheme): Record<string, string> => {
  let transformedObj = {};

  Object.keys(colorMap).map((colorName) => {
    const colorValue = colorMap[colorName];
    // single color string will be converted to 12 shades.
    const shades = _.isArray(colorValue) ? colorValue : generateColorShades(colorValue, colorScheme);
    PaletteScales.forEach((scale, i) => {
      transformedObj[`${CSSVarPrefix}colors-${colorName}-${scale}`] = chroma(shades[i]).rgb().join(',');
    });
  });
  return transformedObj;
};

export const generateCSSVariableColorNameClass = <N extends string>(
  name: N,
  color: string | string[],
  colorScheme: ColorScheme
): { [k in N]: Record<string, string> } => {
  const transformedObj = {};
  // single color string will be converted to 12 shades.
  const shades = _.isArray(color) ? color : generateColorShades(color, colorScheme);
  PaletteScales.forEach((scale, i) => {
    transformedObj[`${CSSVarPrefix}color-${scale}`] = chroma(shades[i]).rgb().join(',');
  });
  // @ts-ignore
  return {
    [`.${name}`]: transformedObj,
  };
};
