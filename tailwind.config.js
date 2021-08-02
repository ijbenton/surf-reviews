const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      teal: colors.teal,
      orange: colors.orange,
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      yellow: colors.amber,
      blue: colors.blue,
      red: colors.red,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
};
