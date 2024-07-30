/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        greyBG: "#F8F8F8",
        neutral: {
          50: "#E8E9EA",
          100: "#B8BABE",
          200: "#96989E",
          300: "#666A72",
          400: "#484D56",
          500: "#1A202C",
          600: "#181D28",
          700: "#12171F",
          800: "#0E1218",
          900: "#0B0D12",
        },
      },
      borderRadius: {
        card: "20px",
        "4xl": "2rem"
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      fontSize: {
        "xxl": "24rem"
      },
      spacing: {
        section: "6rem",
      },
    },
  },
  plugins: [],
};
