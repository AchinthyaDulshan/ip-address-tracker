/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Very-Dark-Gray": "hsl(0, 0%, 17%)",
        "Dark-Gray": "hsl(0, 0%, 59%)"
      },
      backgroundImage:{
        "pattern-bg-mobile":"url('src/assets/images/pattern-bg-mobile.png')",
        "pattern-bg-desktop":"url('src/assets/images/pattern-bg-desktop.png')"
      }
    },
  },
  plugins: [],
}