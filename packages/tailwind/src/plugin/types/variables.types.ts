import { withOpacity } from '../utils/withOpacity';
import { Color, PaletteScale } from './theme.types';

type OpacityFunc = ReturnType<typeof withOpacity>;

export type SingleColorVariables = {
  [num in PaletteScale]: OpacityFunc;
};

export type ThemeColorsVariables = {
  [key in Color | 'color']: SingleColorVariables;
};

export type ThemeVariables = {
  colors: ThemeColorsVariables;
};
