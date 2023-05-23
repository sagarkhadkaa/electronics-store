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
        bespak: ['Bespak', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        deepPurple: '#26072C',
        fuchsia: '#F903AA',
        white: '#FFFFFF',
        lightGray: '#D9D9D9',
        darkGray: '#040404',
      },
    },
  },
  plugins: [],
};
