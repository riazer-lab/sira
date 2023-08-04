const { safeList } = require('./dist/plugin/utils/safelist.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: process.env.NODE_ENV === 'production' ? safeList : [],
  content: process.env.NODE_ENV === 'production' ? [{ raw: '' }] : ['../../apps/**/*.{html,js,ts,tsx,jsx,css}'],
  plugins: [require('./dist/plugin')],
};
