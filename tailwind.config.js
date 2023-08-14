/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#F11A1A",
        },
        csgray: {
          DEFAULT: "#D9D9D9",
        },
      },
    },
  },
  plugins: [],
};
