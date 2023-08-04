import { Theme } from './theme.types';

type MakeOptional<Type, Key extends keyof Type> = Omit<Type, Key> & Partial<Pick<Type, Key>>;

export type PartialTheme = MakeOptional<Theme, 'colors' | 'prefersColorScheme'>;

export type PluginConfig = {
  /**
   * The list of themes to remove `(default: [])`
   */
  excludedThemes?: string[];
  /**
   * The list of themes to modify, add you can also add new variables in each theme.
   */
  themes?: PartialTheme[];
  /**
   * prefix all class names
   * @default ""
   */
  prefix?: string;
};
