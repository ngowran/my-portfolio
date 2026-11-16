/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./data/**/*.{js,ts}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#ecfdf3",
          100: "#d1fadf",
          400: "#34d399",
          500: "#10b981",
          600: "#2A7B2C",
          700: "#1f5f21",
        },
      },
    },
  },
  plugins: [],
};
