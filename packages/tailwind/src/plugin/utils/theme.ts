import { Theme } from '../types/theme.types';
import {
  createColorNameClassCssVariableMap,
  createBWCssVariableMap,
  createBWColorNameClassCssVariableMap,
  createColorCssVariableMap,
} from './variables';
import { PartialTheme } from '../types/config.types';
import { type PluginAPI } from 'tailwindcss/types/config';

export const excludeThemesByName = (removeThemes: string[], themes: PartialTheme[]) => {
  return themes.filter((theme) => {
    return !removeThemes.includes(theme.name || '');
  });
};

export const processThemeVariables = (addBase: PluginAPI['addBase'], theme: Theme) => {
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

  // add theme all relative styles into base layer.
  if (theme.name === 'light') {
    addBase({
      [':root']: {
        colorScheme: 'light',
        ...colorsCssVariableMap,
      },
      ...colorVariablesClassesMap,
    });
  }
  addBase({
    [`[data-theme=${theme.name}]`]: {
      colorScheme: theme.colorScheme || 'light',
      ...colorsCssVariableMap,
    },
  });
  if (theme.prefersColorScheme) {
    addBase({
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
    });

    if (theme.name === 'dark') {
      addBase({
        [`@media (prefers-color-scheme:${theme.colorScheme || 'light'})`]: {
          [`:root`]: {
            colorScheme: 'dark',
            ...colorsCssVariableMap,
          },
        },
      });
    }
  }
  addBase(themeColorVariablesClassesMap);
};
