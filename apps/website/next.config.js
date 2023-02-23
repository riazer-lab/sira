const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

module.exports = withNextra({
  reactStrictMode: true,
  experimental: {
    transpilePackages: ['@sira-ui/tailwind'],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
});
