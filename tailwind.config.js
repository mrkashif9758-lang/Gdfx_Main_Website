/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xss: "350px",
        xs: "460px",
        "3xl": "2000px",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#0F1A7A",
        text_primary: "#FF6B00",
        text_footer: "#FF9B33",
        secondary: "#0077B6",
        orange_main: "#FF6B00",
        off_white: "#d9d9d9",
        light_white: "#FBFBFB",
        blue_dark: "rgba(15, 26, 113, 1)",
        heading_color: "#3D3D3D",
        text_color: "#606060",
        light_gray: "rgba(229, 226, 226, 1)",
        dark_gray: "#333333",
        blue_light: "rgba(27, 47, 224, 1)",
        white_main: "rgba(251, 251, 251, 1)",

        // V2 colors variables
        primaryBlue: "#6a8cff",
        secondaryPurple: "#b44dff",
        infoBlue: "#03afff",
        dangerRed: "#ff6b6b",
        bgFirstBlue: "#000824",
        bgSecondBlue: "#0d1220",
        mutedGray: {
          c1: "#d9d7d7",
          c2: "#9ca3af",
        },
        navyBlue: {
          c1: "#d9d7d7",
          c2: "#9ca3af",
        },
      },
      backgroundImage: {
        "dark-gradient-br":
          "linear-gradient(to bottom right, #0f172a, #1e293b)",
        "primary-gradient": "linear-gradient(to right, #6a8cff, #b44dff)",
        "danger-gradient": "linear-gradient(to right, #ff6b6b, #b44dff)",
        "navy-top-gradient": "linear-gradient(to top, #232329, #000824)",
        "navy-bottom-gradient": "linear-gradient(to bottom, #0d1220, #1c2233)",
      },
      spacing: {
        128: "32rem",
      },
      textShadow: {
        purpleGlow: "0 0 8px #b44dff",
      },
    },
  },
  plugins: [],
};
