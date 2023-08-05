import { SingleColorVariables } from '../types/variables.types';
import { withOpacity } from '../utils/withOpacity';
import { CSSVariablesPrefix } from '../utils/variables';
import { Colors, PaletteScale, PaletteScales } from '../types/theme.types';

const generateSiraColorPaletteVariables = (): SingleColorVariables => {
  const obj = {} as Partial<SingleColorVariables>;
  PaletteScales.forEach((num: PaletteScale) => {
    obj[num] = withOpacity(`${CSSVariablesPrefix}color-${num}`);
  });
  return obj as SingleColorVariables;
};

// generate a palette({50: withOpc...,100:withOpc...}) for single color
const generateSingleColorPaletteVariables = (color: string): SingleColorVariables => {
  const obj = {} as Partial<SingleColorVariables>;
  PaletteScales.forEach((num: PaletteScale) => {
    obj[num] = withOpacity(`${CSSVariablesPrefix}colors-${color}-${num}`);
  });
  return obj as SingleColorVariables;
};

export const generateTailwindThemeExtendedColors = (
  customColorNames: string[]
): { [key: string]: SingleColorVariables } => {
  return {
    ...customColorNames.concat(Colors).reduce((obj, name) => {
      obj[name] = generateSingleColorPaletteVariables(name);
      return obj;
    }, {}),
    color: generateSiraColorPaletteVariables(),
  };
};
