/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        routhem: ['Routhem', 'sans-serif'],
        HAMMERHEAD: ['HAMMERHEAD', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        deepPurple: '#26072C',
        fuchsia: '#F903AA',
        white: '#FFFFFF',
        lightGray: '#D9D9D9',
        darkGray: '#040404',
        linearGradientYellow: `linear-gradient(90deg, #A8620A 2%, #E09519 20%, #FFE581 48%, #FCDC75 52%, #F6C755 60%, #ECA522 71%, #E8980F 75%, #FEB838 100%);`,
      },
    },
  },
  plugins: [],
};
