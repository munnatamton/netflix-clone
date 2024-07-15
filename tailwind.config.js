const { hover } = require('@testing-library/user-event/dist/hover');
const { getActiveElement } = require('@testing-library/user-event/dist/utils');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
    theme: {
      colors: {
        'transparent': 'transparent',
        'current': 'currentColor',
        'smokewhite': '#E5E5E5',
        'black': '#141414',
      },
      fontFamily:{
        'primary':['Netflix Sans', 'sans-serif']
      },
      fontSize:{
        'sm':'0.688rem', //11px
        'base':'0.813rem', //13px
        'xl': '0.875rem', //14px
        '2xl': '1.375rem', //22px
        '3xl': '1.625rem', //26px
        '4xl': '1.875rem', //30px
        '5xl': '4rem', //64px
      },

    extend: {},
  },
  plugins: [
    function({addUtilities}){
      const newUtilities={
        '.active':{
          color:'white',
        },
        '.hover':{
          opacity:'70%',
        }
      };
      addUtilities(newUtilities);
    },
  ],

}

