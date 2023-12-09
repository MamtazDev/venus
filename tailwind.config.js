/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'blue': '#000080',
      'yellow': '#FFA500',
      'dark_grey': '#222',
      'light_grey': '#333',
      'sky': '#E8EEFF',
      'dark_sky': '#9AA8D1',

    },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
    },
    extend: {
      spacing: {
        '6': '6px',
        '8': '8px',
        '10': '10px',
        '14': '14px',
        '15': '15px',
        '20': '20px',
      },
      borderRadius: {
        '3': '3px',
        '5': '5px',
        '8': '8px',
      }
    }
  },
}