/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A855F7",
        secondary: "#FB923C",
        accent: "#F59E0B",
        background: "#FFF7ED",
        dark: "#1F2937",
        light: "#F3E8FF"
      },
    },
  },
  plugins: [],
}

