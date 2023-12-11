/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
  theme: {
    colors: {
      base: "#000080",
      white: "#FFF",
      yellow: "#FFA500",
      text_dark_grey: "#222",
      text_color1: "#191E29",
      text_color2: "#A3AED0",
      text_color3: "#E0E9FF",
      light_grey: "#333",
      sky: "#E8EEFF",
      light_sky: "#F4F7FE",
      dark_sky: "#9AA8D1",
      sky_bg1: "#F6F9FF",
      border_grey: "#C8CBD9",
      border2:'#EEE'


    },
    padding: {
      10: "10px",
      14: "14px",
      15: "15px",
      16: "16px",
      21: "21px",
      23: "23px",
      27: "27px",
      20: "20px",
      25: "25px",
      30: "30px",
      31: "31px",
      45: "45px",
      49: "49px",
      60: "60px",

    },
    fontFamily: {
      sans: ["Work Sans", "sans-serif"],
      lato: ['Lato', 'sans-serif']
    },

    extend: {
      gap: {
        6: "6px",
        8: "8px",
        10: "10px",
        14: "14px",
        15: "15px",
        20: "20px",
        30: "30px",
      },
      borderRadius: {
        3: "3px",
        5: "5px",
        8: "8px",
      },
    },
  },
};
