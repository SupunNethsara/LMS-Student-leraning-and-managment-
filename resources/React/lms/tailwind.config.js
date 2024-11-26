/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js"
  ],
  plugins: [
    require('flowbite/plugin')
],
  theme: {
    extend: {},
  },
  plugins: [],
}