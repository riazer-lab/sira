import chroma from 'chroma-js';
import { ColorScheme, PaletteScales, ThemeColors } from '../types/theme.types';
import { generateRadixColorPalette, foregroundColor } from '@riccox/colorify';
import _ from 'lodash';

export const CSSVariablesPrefix = '--sira-';

export const generateBlackWhite12Shades = (colorScheme: ColorScheme) => {
  return generateRadixColorPalette('#000000', colorScheme);
};

// ex: { "--sira-colors-bw-100" : <hex>,}
export const createBWCssVariableMap = (colorScheme: ColorScheme): Record<string, string> => {
  let transformedObj = {};
  const shades = generateBlackWhite12Shades(colorScheme);
  PaletteScales.forEach((scale, i) => {
    transformedObj[`${CSSVariablesPrefix}colors-bw-${scale}`] = chroma(shades[i]).rgb().join(',');
    transformedObj[`${CSSVariablesPrefix}colors-bw-${scale}-contrast`] = chroma(foregroundColor(shades[i]))
      .rgb()
      .join(',');
  });
  return transformedObj;
};

// ex: { ".bw" : { "--sira-color-100" : <hex>,... } }
export const createBWColorNameClassCssVariableMap = (colorScheme: ColorScheme): { '.bw': Record<string, string> } => {
  const transformedObj = {};
  const shades = generateBlackWhite12Shades(colorScheme);
  PaletteScales.forEach((scale, i) => {
    transformedObj[`${CSSVariablesPrefix}color-${scale}`] = chroma(shades[i]).rgb().join(',');
    transformedObj[`${CSSVariablesPrefix}color-${scale}-contrast`] = chroma(foregroundColor(shades[i])).rgb().join(',');
  });
  return {
    [`.bw`]: transformedObj,
  };
};

const generateColorShades = (color: string, colorScheme: ColorScheme) => {
  // generate radix color shades(50~1100) of this color
  return generateRadixColorPalette(color, colorScheme);
};

// ex: { "--sira-colors-success-100" : <hex>,}
export const createColorCssVariableMap = (colorMap: ThemeColors, colorScheme: ColorScheme): Record<string, string> => {
  let transformedObj = {};

  Object.keys(colorMap).map((colorName) => {
    const colorValue = colorMap[colorName];
    // single color string will be converted to 12 shades.
    const shades = _.isArray(colorValue) ? colorValue : generateColorShades(colorValue, colorScheme);
    PaletteScales.forEach((scale, i) => {
      transformedObj[`${CSSVariablesPrefix}colors-${colorName}-${scale}`] = chroma(shades[i]).rgb().join(',');
      transformedObj[`${CSSVariablesPrefix}colors-${colorName}-${scale}-contrast`] = chroma(foregroundColor(shades[i]))
        .rgb()
        .join(',');
    });
  });
  return transformedObj;
};

// ex: { ".danger" : { "--sira-color-100" : <hex>,... } }
export const createColorNameClassCssVariableMap = <N extends string>(
  name: N,
  color: string | string[],
  colorScheme: ColorScheme
): { [k in N]: Record<string, string> } => {
  const transformedObj = {};
  // single color string will be converted to 12 shades.
  const shades = _.isArray(color) ? color : generateColorShades(color, colorScheme);
  PaletteScales.forEach((scale, i) => {
    transformedObj[`${CSSVariablesPrefix}color-${scale}`] = chroma(shades[i]).rgb().join(',');
    transformedObj[`${CSSVariablesPrefix}color-${scale}-contrast`] = chroma(foregroundColor(shades[i])).rgb().join(',');
  });
  // @ts-ignore
  return {
    [`.${name}`]: transformedObj,
  };
};
