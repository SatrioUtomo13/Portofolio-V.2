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
        secondary : '#183D3D'
      }
    },
  },
  plugins: [],
}

