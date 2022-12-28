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
      'practice-green-light':'#3A7A7C',
      'practice-green-dark':'#2E505D',
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
