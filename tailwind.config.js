/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  container: {
    padding: '2rem',
  },
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#240D57',
          300: '#501FC1',
          200: '#8456EC',
          100: '#E87BF8'
        },
        secondary: {
          300: '#CCB6FF',
          200: '#EDE5FF',
          100: '#F6F2FF'
        },
        alert: {
          pink: '#FFD7E0',
          red: '#E61445',
          teal: '#D3FFE2',
          green: '#00805E'
        },
        text: {
          600: '#4F4F4F',
          500: '#828282',
          400: '#BDBDBD',
          300: '#E0E0E0',
          200: '#F2F2F2',
          100: '#FBFAFF'
        }
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}