/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#702963	",
        secondary: "#F9F9F9",
        tertiary: "#FFF9E8",
      },
      fontFamily: {
        poppins: ['"Poppins"', 'serif'],
      },
      fontSize: {
        h1: ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }], // 36px, bold
        h2: ['1.875rem', { lineHeight: '2.25rem', fontWeight: '600' }], // 30px
        h3: ['1.5rem', { lineHeight: '2rem', fontWeight: '500' }], // 24px
        body: ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }], // 16px
        small: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }], // 14px
      },
    },
  },
  plugins: [],
};
