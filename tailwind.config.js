/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      encode: ['Encode Sans', 'sans-serif'],
      sans: ['Open Sans', 'sans-serif'],
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};
