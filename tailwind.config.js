/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      // https://mdigi.tools/color-shades/
      colors: {
        primary: {
          100: '#ece3ff',
          200: '#c5aaff',
          300: '#9f71ff',
          400: '#7839ff',
          500: '#5200ff', // base primary
          600: '#4000c6',
          700: '#2e008e',
          800: '#1b0055',
          900: '#09001c',
        },
        secondary: {
          100: '#fde5f0',
          200: '#f9b0d1',
          300: '#f47cb2',
          400: '#f04893',
          500: '#ec1374', // base secondary
          600: '#b70f5a',
          700: '#830b40',
          800: '#4f0627',
          900: '#1a020d',
        }
      },
    },
  },
  plugins: [],
}

