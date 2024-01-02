/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ['Poppins'],
        'rubik' : ['Rubik Doodle Shadow']
      },
      colors: {
        background : '#040D12',
        secondary : '#161616',
        text : '#9f9f9f',
        greenText : '#009e66'
      }
    },
  },
  plugins: [],
}

