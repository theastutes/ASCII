/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",


"./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens:{
        'md': {'max':'800px'},
        'fd':{'min':'800px'},
      },
      colors:{
        'seagreen':'#00ADB5',
      },
    },
  },
  plugins: [],
}
