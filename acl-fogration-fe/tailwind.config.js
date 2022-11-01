/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryblack: '#0C0C0D',
        blue: '#1434A4',
        lightgrey: '#C3C0C0',
        darkgrey: '#404143',
        tradewind: '#61B0B7',
        lachmara:'#0583D2',
        matisse: '#16558F'
      },
      backgroundImage: {
      },
    },
    plugins: [],
  },
};
