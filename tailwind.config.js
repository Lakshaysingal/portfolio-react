/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primaryColor, #3b82f6)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
