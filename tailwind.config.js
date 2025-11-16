/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F4369',       // main theme color
        'primary-dark': '#102337',// hover or darker variant
        'primary-light': '#A5C3E4',
      },
    },
    
  },
  plugins: [],
}
