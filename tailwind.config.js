const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        emerald: colors.emerald,
      },
    },
  },
  darkMode: 'media',
  variants: {},
  plugins: [],
};
