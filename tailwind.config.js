/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'exo': 'Exo 2',
        'inter': 'Inter',
        'roboto': 'Roboto',
        'ptsans': ['PT Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#363738',
          secondary: '#6B6B6C',
          red: '#CA3133',
        }
      },
      maxWidth: {
        base: '82rem'
      }
    },
  },
  plugins: [],
}

