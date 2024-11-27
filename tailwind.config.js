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
      fontFamily: {
        "noto-serif": ['"Noto Serif"', "serif"],
        "playpen-sans": ["Playpen Sans Variable", "cursive"],
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
