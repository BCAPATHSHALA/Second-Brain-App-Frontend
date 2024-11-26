/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        seasalt: "#F8FAFC",
        mediumslateblue: "#726DD1",
        secondary: "#E1E7FE",
        primary: "#4F44E5",
        oxfordblue: "#171B2D",
        battleshipgray: "#888D93",
      },
    },
  },
  plugins: [],
};
