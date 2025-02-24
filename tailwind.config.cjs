/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'xl': '36rem',
      },
      screens: {
        'landscape': {'raw': '(orientation: landscape)'},
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px'
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
} 