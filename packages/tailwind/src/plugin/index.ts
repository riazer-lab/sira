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
import { createThemeVariables, excludeThemesByName } from './utils/theme';
import _ from 'lodash';
import { getSelectorsWithPrefix } from './utils/prefix';

const cssPath = path.resolve(__dirname, path.join('..', 'css'));
const baseCSS = fs.readFileSync(path.join(cssPath, 'base.css'), 'utf-8');
const componentsCSS = fs.readFileSync(path.join(cssPath, 'components.css'), 'utf-8');
const utilitiesCSS = fs.readFileSync(path.join(cssPath, 'utilities.css'), 'utf-8');

const config = plugin.withOptions<PluginConfig>(
  (options: PluginConfig) =>
    ({ addBase, addComponents, addUtilities }) => {
      const base = postcss.parse(baseCSS);
      const components = postcss.parse(componentsCSS);
      const utilities = postcss.parse(utilitiesCSS);

      // objectify css styles
      const baseCSSObj = postcssJs.objectify(base);
      const componentsCSSObj = postcssJs.objectify(components);
      const utilitiesCSSObj = postcssJs.objectify(utilities);

      // get sira-ui config
      const configValue: PluginConfig = { ...options } || {};
      const themes: PartialTheme[] = (configValue.themes ?? []).concat([lightTheme, darkTheme]);

      // find existed light/dark themes
      const lightThemeExisted = themes.find((theme) => theme.name === 'light');
      const darkThemeExisted = themes.find((theme) => theme.name === 'dark');

      // and other user-defined themes
      const customThemes = themes.filter((theme) => theme.name !== 'light' && theme.name !== 'dark') || [];

      const pluginConfig: PluginConfig = {
        prefix: configValue.prefix,
        excludedThemes: configValue.excludedThemes || [],
        themes: [
          {
            ...lightThemeExisted,
            name: 'light',
            colorScheme: 'light',
          },
          {
            ...darkThemeExisted,
            name: 'dark',
            colorScheme: 'dark',
          },
          ...customThemes,
        ],
      };

      // config must be a object
      if (isValidObject(pluginConfig)) {
        // remove excluded themes
        const configThemes = pluginConfig.themes || [];
        const themesToRemove = pluginConfig.excludedThemes || [];
        const siraThemes = excludeThemesByName(themesToRemove, configThemes);

        if (siraThemes.length > 0) {
          // add css variables codes for each theme
          siraThemes.forEach((theme) => {
            let mergedTheme: Theme;

            // merge built-in themes
            if (theme.colorScheme === 'dark') {
              mergedTheme = _.merge(darkTheme, theme);
            } else {
              mergedTheme = _.merge(lightTheme, theme);
            }

            addBase(
              // inject some basic depended css variables
              createThemeVariables(mergedTheme)
            );
          });
        }
      }

      // add base styles
      addBase(baseCSSObj);

      // add component styles
      // apply prefix, must apply a string even empty like '' for normal build
      const componentsPrefixed = getSelectorsWithPrefix(configValue.prefix ?? '', componentsCSSObj);
      addComponents(componentsPrefixed);

      // add utilities styles
      addUtilities(utilitiesCSSObj);
    },
  // inject extended themes
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
