import { Theme } from '../types/theme.types';
import {
  createColorNameClassCssVariableMap,
  createBWCssVariableMap,
  createBWColorNameClassCssVariableMap,
  createColorCssVariableMap,
} from './variables';
import { PartialTheme } from '../types/config.types';

export const excludeThemesByName = (removeThemes: string[], themes: PartialTheme[]) => {
  return themes.filter((theme) => {
    return !removeThemes.includes(theme.name || '');
  });
};

export const createThemeVariables = (theme: Theme) => {
  const colorsCssVariableMap = {
    // make sure bw color available
    ...createBWCssVariableMap(theme.colorScheme),
    ...createColorCssVariableMap({ ...theme.colors }, theme.colorScheme),
  };

  // get { .classes : { --sira-color-500: xxx...} } classes obj
  let colorVariablesClassesMap = {
    // make sure bw color available
    ...createBWColorNameClassCssVariableMap(theme.colorScheme),
  };
  for (let colorName in theme.colors) {
    colorVariablesClassesMap = {
      ...colorVariablesClassesMap,
      ...createColorNameClassCssVariableMap(colorName, theme.colors[colorName], theme.colorScheme),
    };
  }

  // get { [data-theme=xxx] .classes : { --sira-color-500: xxx...} } classes obj
  let themeColorVariablesClassesMap = {
    // make sure bw color available
    [`[data-theme=${theme.name}] .bw`]: createBWColorNameClassCssVariableMap(theme.colorScheme)['.bw'],
  };
  for (let colorName in theme.colors) {
    themeColorVariablesClassesMap = {
      ...themeColorVariablesClassesMap,
      [`[data-theme=${theme.name}] .${colorName}`]: createColorNameClassCssVariableMap(
        colorName,
        theme.colors[colorName],
        theme.colorScheme
      )[`.${colorName}`],
    };
  }

  // return theme all relative styles
  return {
    ...(theme.name === 'light' && {
      [':root']: {
        colorScheme: 'light',
        ...colorsCssVariableMap,
      },
      ...colorVariablesClassesMap,
    }),
    [`[data-theme=${theme.name}]`]: {
      colorScheme: theme.colorScheme || 'light',
      ...colorsCssVariableMap,
    },
    ...themeColorVariablesClassesMap,
    // if theme enabled prefersColorScheme param
    ...(theme.prefersColorScheme && {
      [`@media (prefers-color-scheme:${theme.colorScheme || 'light'})`]: {
        ...(theme.name === 'dark' && {
          [`:root`]: {
            colorScheme: 'dark',
            ...colorsCssVariableMap,
          },
        }),
        [`[data-theme=${theme.name}]`]: {
          colorScheme: theme.colorScheme || 'light',
          ...colorsCssVariableMap,
        },
        ...colorVariablesClassesMap,
      },
    }),
  };
};
