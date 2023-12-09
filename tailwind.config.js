/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#000080',
      'yellow': '#FFA500',
      'text_dark_grey': '#222',
      'light_grey': '#333',
      'sky': '#E8EEFF',
      'dark_sky': '#9AA8D1',
    },
    padding: {
      '30': '30px',
      '14': '14px',
      '45': '45px'
    },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
    },
    // fontSize: {
      
    // },
    // fs: {
    //   '3xl': '48px',
    //   'xxl': '28px',
    //   'xl': '24px',
    //   'lg': '20px',
    //   'base': '16px',
    //   'sm': '18px',
    //   'xm': '14px',
    // },
    extend: {
      gap: {
        '6': '6px',
        '8': '8px',
        '10': '10px',
        '14': '14px',
        '15': '15px',
        '20': '20px',
        '30': '30px',
      },
      borderRadius: {
        '3': '3px',
        '5': '5px',
        '8': '8px',
      }
    }
  },
}