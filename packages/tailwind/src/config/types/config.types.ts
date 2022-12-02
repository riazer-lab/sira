import { Theme } from "./theme.types";

type MakeOptional<Type, Key extends keyof Type> = Omit<Type, Key> &
  Partial<Pick<Type, Key>>;

export type PartialTheme = MakeOptional<Theme, "colors" | "prefersColorScheme">;

/**
 * The @{config} object.
 * @typedef {Type} ConfigTheme
 * @property {string[]} [excludedThemes] - The list of themes to remove.
 * @property {PartialTheme[]} [themes] -  The list of themes to modify, add or remove, you can also add new variables in each theme.
 * @property {string} [prefix] - prefix all class names.
 */
type ConfigTheme = {
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

export type Config = ConfigTheme;
