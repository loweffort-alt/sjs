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
    },
  },
  plugins: [],
};
