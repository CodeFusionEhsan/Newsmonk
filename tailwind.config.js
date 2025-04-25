/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Dark blue for the navbar
        secondary: '#3B82F6', // Lighter blue for hover effects
        dimWhite: 'rgba(255, 255, 255, 0.8)', // Dim white for text
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Good font for a news website
      },
    },
  },
  plugins: [],
};