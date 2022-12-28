/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#000000",
          primary: "#171035",
          secondary: "#D4AF46",
          failure: "#D44646",
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
