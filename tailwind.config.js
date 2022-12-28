/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
    },
    extend: {
      backgroundImage: {
        image: "url('./assets/background.png')",
      },
      colors: {
        background: {
          dark: "#000000",
          primary: "#171035",
          secondary: "#D4AF46",
          failure: "#D44646",
          danger: "#14EA85",
        },
        typography: {
          primary: "#ffffff",
          secondary: "#D4AF46",
          danger: "#14EA85",
        },
      },
    },
  },
  plugins: [],
};
