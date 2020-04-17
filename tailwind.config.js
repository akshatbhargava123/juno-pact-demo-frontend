const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {},
    colors: {
      ...defaultTheme.colors,
      gold: {
        100: '#fef6e2',
        200: '#fbe196',
        300: '#e1c77b',
        400: '#bfa55a',
        500: '#b1964b',
        600: '#8e742c',
        700: '#7a6127',
        800: '#63471b',
      },
    },
  },
  variants: {},
  plugins: [],
}
