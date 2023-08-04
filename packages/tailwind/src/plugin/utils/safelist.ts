import { SafelistConfig } from 'tailwindcss/types/config';

export const safelist: Partial<SafelistConfig> = [
  {
    pattern:
      /^(bg|to|via|from|text|fill|stroke|border|outline|ring)-(color|bw|success|warn|danger|info)-(50|100|200|300|400|500|600|700|800|900|1000|1100)$/,
    variants: [
      // "first",
      // "last",
      // "odd",
      // "even",
      // "visited",
      // "checked",
      // "empty",
      // "read-only",
      // "group-hover",
      // "group-focus",
      // "focus-within",
      'hover',
      'focus',
      // "focus-visible",
      // "active",
      // "disabled",
    ],
  },
];
