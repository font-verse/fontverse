/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#252525",
          200: "#0f172a",
        },
        light: "#F7F0F0",
        highlight: "#9333ea",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
