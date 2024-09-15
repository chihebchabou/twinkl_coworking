/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite-react/tailwind'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {

    screens: {
      sm: '580px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        yellowGreen: '#ced535',
        deepSkyBlue: '#24a1dc',
        plum: '#ae69a7',
        gold: '#fae32c',
        darkGrayishBlue: '#3d4f51'
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}

