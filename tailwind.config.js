const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content:['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    safelist: [
      'text-gray-100',
      'ring-offset-gray-100',
      'ring-gray-400',
      'bg-gray-500',
      'bg-gray-600',
      'text-yellow-100',
      'ring-offset-yellow-100',
      'ring-yellow-400',
      'bg-yellow-500',
      'bg-yellow-600',
      'text-salmon-100',
      'ring-offset-salmon-100',
      'ring-salmon-400',
      'bg-salmon-500',
      'bg-salmon-600',
      'text-teal-100',
      'ring-offset-teal-100',
      'ring-teal-400',
      'bg-teal-500',
      'bg-teal-600',
      'text-blueGray-100',
      'ring-offset-blueGray-100',
      'ring-blueGray-400',
      'bg-blueGray-500',
      'bg-blueGray-600',

    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      blueGray: colors.blueGray,
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      teal: colors.teal,
      cyan: colors.cyan,
      blue: colors.sky,
      indigo: colors.violet,
      pink: colors.fuchsia,
      salmon: colors.rose,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
