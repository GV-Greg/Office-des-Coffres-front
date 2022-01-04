const colors = require('tailwindcss/colors');

module.exports = {
<<<<<<< HEAD
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
=======
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    { pattern: /text-(gray|yellow|salmon|teal|slate|blue)-(100|200|300|400|500|600|700|800|900)/, },
    { pattern: /ring-offset-(gray|yellow|salmon|teal|slate|blue)-(100|200|300|400|500|600|700|800|900)/, },
    { pattern: /ring-(gray|yellow|salmon|teal|slate|blue)-(100|200|300|400|500|600|700|800|900)/, },
    { pattern: /bg-(gray|yellow|salmon|teal|slate|blue)-(100|200|300|400|500|600|700|800|900)/, },
  ],
>>>>>>> develop
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
<<<<<<< HEAD
      blueGray: colors.blueGray,
=======
      slate: colors.slate,
>>>>>>> develop
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
<<<<<<< HEAD
    extend: {},
  },
  variants: {
=======
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      '10xl': '10rem',
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '0': '0',
      '45': '45deg',
      '90': '90deg',
      '135': '135deg',
      '180': '180deg',
      '225': '225deg',
      '270': '270deg',
    },
>>>>>>> develop
    extend: {},
  },
  plugins: [],
}
