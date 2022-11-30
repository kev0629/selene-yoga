/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'selene-green': '#277273',
      'selene-green-dark': '#022F38',
      'selene-blue':'#9EC1D7'
    },
    fontFamily:{
      serif:["mistral"],
      main:["kaisei"]
    }
  },
  },
  plugins: [],
}
