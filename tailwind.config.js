/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg-color": "#01020D",
        "secondry-bg-color": "#151620",
        "lite-bg-color": "#39393E",
        "blue-bg-color": "#0257E6",
      },
    },
  },
  plugins: [],
};

