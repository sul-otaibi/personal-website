/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Rubik", "system-ui"],
      serif: ["DM Serif Display", "Georgia"],
    },
    extend: {
      colors: {
        Blue: "#279EFF",
        Green: "#86A789",
      },
    },
  },
  plugins: [],
};
