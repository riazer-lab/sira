import {
  SingleColorVariables,
  ThemeColorsVariables,
  ThemeVariables,
} from "../types/variables.types";
import { withOpacity } from "../utils/withOpacity";
import { CSSVarPrefix } from "../utils/css-variables";
import {
  Colors,
  PaletteScale,
  PaletteScales,
  ThemeColors,
} from "../types/theme.types";

const generateSiraColorPaletteVariables = (): SingleColorVariables => {
  const obj = {} as Partial<SingleColorVariables>;
  PaletteScales.forEach((num: PaletteScale) => {
    obj[num] = withOpacity(`${CSSVarPrefix}color-${num}`);
  });
  return obj as SingleColorVariables;
};

const generateSingleColorPaletteVariables = (
  color: string
): SingleColorVariables => {
  const obj = {} as Partial<SingleColorVariables>;
  PaletteScales.forEach((num: PaletteScale) => {
    obj[num] = withOpacity(`${CSSVarPrefix}colors-${color}-${num}`);
  });
  return obj as SingleColorVariables;
};

const generatePaletteVariables = (): ThemeColorsVariables => {
  let obj = {} as Partial<ThemeColorsVariables>;
  Colors.forEach((name) => {
    obj[name] = generateSingleColorPaletteVariables(name);
  });
  return obj as ThemeColorsVariables;
};

export const themeVars: ThemeVariables = {
  colors: {
    ...generatePaletteVariables(),
    color: generateSiraColorPaletteVariables(),
  },
};

export const generateCustomColorVariables = (
  colorMap: ThemeColors
): { [key: string]: SingleColorVariables } => {
  return Object.keys(colorMap).reduce((obj, name) => {
    obj[name] = generateSingleColorPaletteVariables(name);
    return obj;
  }, {});
};
