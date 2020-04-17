const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {},
    colors: {
      ...defaultTheme.colors,
      gold: {
        200: '#D6C493',
        400: '#B5963E'
      },
    },
  },
  variants: {},
  plugins: [],
}
