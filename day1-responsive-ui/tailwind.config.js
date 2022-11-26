/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--color-primary), <alpha-value>)',
        secondary: 'rgba(var(--color-secondary), <alpha-value>)',
      },
    },
  },
  plugins: [],
}