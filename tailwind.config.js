/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'background-color': '#F2FFF4',
        'text-color': '#2A7B2C',
        'accent-color': '#B8DAB8',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
