/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        matrix: ['"Courier New"', "monospace"],
      },
      colors: {
        matrixGreen: "#00FF41",
      },
    },
  },
  plugins: [],
};
