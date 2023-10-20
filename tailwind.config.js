/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      title: ['"Playfair Display"'],
    },
    extend: {
      grayscale: {
        30: "30%",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "9/16": "9 / 16",
      },
      gridTemplateColumns: {
        autofill: "repeat(auto-fill, minmax(250px, 25%))",
      },
    },
  },
  plugins: [],
};
