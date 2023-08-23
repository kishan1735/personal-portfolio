/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      kxl: "1700px",
    },
    extend: {
      fontFamily: { sans: ["Josefin Sans", "sans-serif"], alata: ["Alata"] },
    },
    letterSpacing: {
      widest: ".3em",
      wider: ".2em",
    },
  },
  plugins: [],
};
