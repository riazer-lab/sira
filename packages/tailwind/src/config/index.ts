import { isValidObject } from './utils/object';
import { lightTheme } from './theme/light-theme';
import { generateTailwindThemeExtendedColors } from './theme/variables';
import { darkTheme } from './theme/dark-theme';
import plugin from 'tailwindcss/plugin';
import fs from 'fs';
import postcss from 'postcss';
import postcssJs from 'postcss-js';
import path from 'path';
import { PluginConfig, PartialTheme } from './types/config.types';
import { Theme } from './types/theme.types';
import { createTheme, excludeThemesByName } from './utils/theme';
import _ from 'lodash';
import { getSelectorsWithPrefix } from './utils/prefix';

const basePath = path.resolve(__dirname, path.join('..', 'css'));
const baseCSS = fs.readFileSync(path.join(basePath, 'base.css'), 'utf-8');
const componentsCSS = fs.readFileSync(path.join(basePath, 'components.css'), 'utf-8');
const utilitiesCSS = fs.readFileSync(path.join(basePath, 'utilities.css'), 'utf-8');

const config = plugin.withOptions<PluginConfig>(
  (options: PluginConfig) =>
    ({ addBase, addComponents, addUtilities }) => {
      const base = postcss.parse(baseCSS);
      const components = postcss.parse(componentsCSS);
      const utilities = postcss.parse(utilitiesCSS);

      // objectify css styles
      // @ts-ignore
      const baseObj = postcssJs.objectify(base);
      // @ts-ignore
      const componentsObj = postcssJs.objectify(components);
      // @ts-ignore
      const utilitiesObj = postcssJs.objectify(utilities);

      // get sira-ui config
      const configValue: PluginConfig = { ...options } || {};
      const themes: PartialTheme[] = (configValue.themes ?? []).concat([lightTheme, darkTheme]);

      // find existed light/dark themes
      const lightThemeExists = themes.find((theme) => theme.name === 'light');
      const darkThemeExists = themes.find((theme) => theme.name === 'dark');

      // and other user-defined themes
      const restThemes = themes.filter((theme) => theme.name !== 'light' && theme.name !== 'dark') || [];

      let siraConfig: PluginConfig = {
        prefix: configValue.prefix,
        excludedThemes: configValue.excludedThemes || [],
        themes: [
          {
            name: 'light',
            colorScheme: 'light',
            ...lightThemeExists,
          },
          {
            name: 'dark',
            colorScheme: 'dark',
            ...darkThemeExists,
          },
          ...restThemes,
        ],
      };

      // validate config
      if (isValidObject(siraConfig)) {
        // remove excluded themes
        const configThemes = siraConfig.themes || [];
        const themesToRemove = siraConfig.excludedThemes || [];
        const siraThemes = excludeThemesByName(themesToRemove, configThemes);

        if (siraThemes.length > 0) {
          siraThemes.forEach((theme) => {
            let mergedTheme: Theme;

            // merge built-in themes
            if (theme.colorScheme === 'dark') {
              mergedTheme = _.merge(darkTheme, theme);
            } else {
              mergedTheme = _.merge(lightTheme, theme);
            }

            addBase([
              // inject some basic depended css variables
              ...createTheme(mergedTheme),
            ]);
          });
        }
      }

      // add all style to tailwindcss
      addBase(baseObj);
      // apply prefix, must apply a string even empty like '' for normal build
      const componentsPrefixed = getSelectorsWithPrefix(configValue.prefix ?? '', componentsObj);
      addComponents(componentsPrefixed);
      addUtilities(utilitiesObj);
    },
  (options: PluginConfig) => {
    const customColorNames: string[] = [];
    if (isValidObject(options)) {
      const themes = options.themes || [];
      // insert custom color variables from the config
      themes.forEach((theme) => {
        if (theme?.colors) {
          customColorNames.push(...Object.keys(theme.colors));
        }
      });
    }

    return {
      theme: {
        extend: {
          colors: {
            ...generateTailwindThemeExtendedColors(_.uniq(customColorNames)),
          },
        },
      },
    } as PluginConfig;
  }
);

module.exports = config;
