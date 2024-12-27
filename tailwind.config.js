/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      VarelaRound: ["Varela Round", "serif"],
      Delius: ["Delius", "serif"],
    },
    extend: {
      colors: {
        lightBlue: "#409bb0",
      },
    },
  },
  plugins: [],
};
