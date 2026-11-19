/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C92071',
        dark: '#1F1F1F',
        light: '#F5F5F5',
      }
    },
  },
  plugins: [],
}