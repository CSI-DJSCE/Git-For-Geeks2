/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gothic: ["Franklin Gothic Medium", "Georgia", "sans-serif"],
      },
      fontSize: {
        xl: [
          "24px",
          {
            lineHeight: "27.21px",
          },
        ],
      },
      borderWidth: {
        3: "3px",
      },
      colors: {
        darkOlive: "#ACC2A8",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
