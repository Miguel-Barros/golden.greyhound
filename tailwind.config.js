/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    keyframes: {
      "slide-up": {
        "0%": { transform: "translateY(100%)" },
        "100%": { transform: "translateY(0)" },
      },
      "slide-left": {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0)" },
      },
      "slide-right": {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(0)" },
      },
    },
    animation: {
      "slide-up": "slide-up 0.7s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
      "slide-left": "slide-left 0.7s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
      "slide-right": "slide-right 0.7s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
    },
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
  plugins: [
  ],
};
