/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBlueDarkModeEL: "hsl(209, 23%, 22%)",
        veryDarkBlueDarkModeBg: "hsl(207, 26%, 17%)",
        veryDarkBlueLightModeText: "hsl(200, 15%, 8%)",
        DarkGrayLightModeInput: "hsl(0, 0%, 52%)",
        veryLightGrayLightModeBg: "hsl(0, 0%, 98%)",
        whiteDarkModeTextAndLightModeEl: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        nunito: '"Nunito Sans", sans-serif',
      },
    },
  },
  plugins: [],
};
