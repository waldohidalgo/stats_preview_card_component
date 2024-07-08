/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        veryDarkGroundMainBg: "hsl(233, 47%, 7%)",
        darkDesaturedBlueCardBg: "hsl(244, 38%, 16%)",
        softViolet: "hsl(277, 64%, 61%)",
        white: "hsl(0, 0%, 100%)",
        whiteMainHeadingStats: "hsl(0, 0%, 100%)",
        slightlyTransparentWhiteMainParagraph: "hsla(0, 0%, 100%, 0.75)",
        slightlyTransparentWhiteStatHeadings: "hsla(0, 0%, 100%, 0.6)",
      },
    },
  },
  plugins: [],
};
