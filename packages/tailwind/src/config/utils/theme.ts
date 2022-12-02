import { Theme } from "../types/theme.types";
import {
  colorMap2CSSVariableMap,
  generateCSSVariableColorNameClass,
} from "./css-variables";
import { PartialTheme } from "../types/config.types";

export const excludeThemesByName = (
  removeThemes: string[],
  themes: PartialTheme[]
) => {
  return themes.filter((theme) => {
    return !removeThemes.includes(theme.name || "");
  });
};

export const createTheme = (themeObj: Theme) => {
  const theme = {
    ...themeObj,
    // transform color css variables
    colors: colorMap2CSSVariableMap(
      { ...themeObj.colors },
      themeObj.colorScheme
    ),
  };

  // get { .classes : { --sira-color-500: xxx...} } classes obj
  let colorNameClasses = {};
  for (let colorName in themeObj.colors) {
    colorNameClasses = {
      ...colorNameClasses,
      ...generateCSSVariableColorNameClass(
        colorName,
        themeObj.colors[colorName],
        themeObj.colorScheme
      ),
    };
  }

  // get { [data-theme=xxx] .classes : { --sira-color-500: xxx...} } classes obj
  let themeColorNameClasses = {};
  for (let colorName in themeObj.colors) {
    themeColorNameClasses = {
      ...themeColorNameClasses,
      [`[data-theme=${theme.name}] .${colorName}`]:
        generateCSSVariableColorNameClass(
          colorName,
          themeObj.colors[colorName],
          themeObj.colorScheme
        )[`.${colorName}`],
    };
  }
  return [
    {
      ...(theme.name === "light" && {
        [":root"]: {
          colorScheme: "light",
          ...theme.colors,
        },
        ...colorNameClasses,
      }),
      [`[data-theme=${theme.name}]`]: {
        colorScheme: theme.colorScheme || "light",
        ...theme.colors,
      },
      ...themeColorNameClasses,
      ...(theme.prefersColorScheme && {
        [`@media (prefers-color-scheme:${theme.colorScheme || "light"})`]: {
          [`:root,[data-theme=${theme.name}]`]: {
            colorScheme: theme.colorScheme || "light",
            ...theme.colors,
          },
          ...themeColorNameClasses,
        },
      }),
    },
  ];
};
