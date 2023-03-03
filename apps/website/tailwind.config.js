/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{css,js,ts,jsx,tsx,mdx}',
    './components/**/*.{css,js,ts,jsx,tsx}',
    './style/**/*.{css,js,ts,jsx,tsx}',
    './locales/**/*.json',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@sira-ui/tailwind')({
      themes: [
        {
          name: 'light',
          colorScheme: 'light',
          prefersColorScheme: false,
          colors: {
            primary: '#7118e0',
            secondary: '#5955f1',
          },
        },
        {
          name: 'dark',
          colorScheme: 'dark',
          prefersColorScheme: false,
          colors: {
            primary: '#7118e0',
            secondary: '#5955f1',
          },
        },
      ],
    }),
  ],
};
