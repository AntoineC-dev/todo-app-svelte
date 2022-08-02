/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: ["./src/app.html", "./src/**/*.{html,js,svelte,ts}"],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: "hsl(220, 98%, 61%)",
      cyan: "hsl(192, 100%, 67%)",
      purple: "hsl(280, 87%, 65%)",
      light: {
        100: "hsl(0, 0%, 98%)",
        200: "hsl(236, 33%, 92%)",
        300: "hsl(233, 11%, 84%)",
        400: "hsl(236, 9%, 61%)",
        500: "hsl(235, 19%, 35%)",
      },
      dark: {
        100: "hsl(236, 33%, 92%)",
        200: "hsl(234, 39%, 85%)",
        300: "hsl(234, 11%, 52%)",
        400: "hsl(233, 14%, 35%)",
        500: "hsl(237, 14%, 26%)",
        600: "hsl(235, 24%, 19%)",
        700: "hsl(235, 21%, 11%)",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Open\\ Sans", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "clamp-body": "clamp(0.75rem,calc(0.33rem + 1.04vw),1.00rem)",
        "clamp-heading": [
          "clamp(1.75rem, calc(-0.12rem + 4.69vw), 2.88rem)",
          {
            letterSpacing: "0.3em",
            lineHeight: "1",
          },
        ],
      },
      spacing: {
        "clamp-toggle": "clamp(1.25rem, calc(0.42rem + 2.08vw), 1.75rem)",
        "clamp-logo": "clamp(1.25rem, calc(0.00rem + 3.13vw), 2.00rem)",
        "clamp-cross": "clamp(0.75rem, calc(0.33rem + 1.04vw), 1.00rem)",
        "clamp-x-check": "clamp(0.56rem, calc(0.25rem + 0.78vw), 0.75rem)",
        "clamp-y-check": "clamp(0.44rem, calc(0.13rem + 0.78vw), 0.63rem)",
        "clamp-x-bg": "clamp(12.50rem, calc(6.99rem + 18.38vw), 18.75rem)",
        "clamp-top-padding": "clamp(2.75rem, calc(-1.00rem + 12.50vw), 7.00rem)",
      },
      minHeight: {
        card: "clamp(3.25rem, calc(2.42rem + 2.08vw), 3.75rem)",
      },
    },
  },
  plugins: [],
};
