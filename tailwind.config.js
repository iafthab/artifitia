/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#003F62",
        gold: "#eda415",
        beige: "#f4f8f5",
        grey: "#9A9A9A",
        grey2: "#dadada",
        lightGrey: "#eeeeee",
        skyBlue: "#b3d4e5",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        pattern: "url('/img/bg.png')",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0.5",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
