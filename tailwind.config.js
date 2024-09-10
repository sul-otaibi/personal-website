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
      animation: {
        'rotate-slow': 'rotate-slow 20s linear infinite',
      },
      keyframes: {
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["light"],
  }
};
