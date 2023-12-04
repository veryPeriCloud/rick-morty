/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rm: {
          lime: "#88e23b",
          yellow: "#ebe480",
          blue: "#043c6e",
          green: "#60a85f",
          mystery: "#a6cccc"         
        }
      }
    },
  },
  plugins: [],
}

