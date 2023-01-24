export const Colors = ["bw", "success", "warn", "danger"] as const;
export type Color = (typeof Colors)[number];
export const PaletteScales = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "1000",
  "1100",
] as const;
export type PaletteScale = (typeof PaletteScales)[number];

export type ColorScheme = "light" | "dark";

export type ThemeColors =
  | {}
  | {
      [k in string]: string;
    };

export type Theme = {
  name: string;
  colorScheme: ColorScheme;
  prefersColorScheme: boolean;
  colors: ThemeColors;
};

export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};
