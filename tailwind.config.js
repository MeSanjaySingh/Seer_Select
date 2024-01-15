/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(0, 0, 0, 0.80)",
      },
      aspectRatio: {
        '10/9': '10 / 9',
      },
    },
  },
  plugins: [],
};
