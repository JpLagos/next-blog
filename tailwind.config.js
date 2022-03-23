module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark: '#2F2F2F',
        blu: '#124973',
        lightBlu: '#0B6887',
        cream: '#17AEC2',
        orange: '#aaf2f2',



      },
    },
    fontFamily: {
      Poppins: ['Poppins'],
      oswald: ['Oswald'],
    },
    variants: {
      borderWidth: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
