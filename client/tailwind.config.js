/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        railway: ['Railway', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },

      colors: {
        'cream': '#D2CCB1',
        'lightCream':'#f6f5ef',
        'darkCream': '#7d7969'
      }
    },
  },
  plugins: [],
} 