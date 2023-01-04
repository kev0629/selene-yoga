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
      'practice-green-light':'#4A7882',
      'practice-green-dark':'#2F505E',
      'selene-blue':'#9EC1D7',
      'selene-white':'#FBF5EE'
    },
    fontFamily:{
      serif:["mistral"],
      main:["kaisei"]
    }
  },
  },
  plugins: [],
}
