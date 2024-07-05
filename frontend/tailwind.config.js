/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#1A0232",
        white: "#ffffff",
        black: "#000000",
        placeHolder: "#A9A9A9",
        nav: "#070109",

        primary: {
          50: "#F4F4F5",
          100: "#E9E2ED",
        },
        secondary: {
          200: "#D9CCE0",
          300: "#C6C4C7",
          350: "#CDC7CD",
          400: "#CDC1D2",
          500: "#A9A6A9",
        },
        border: {
          1: "#79747e",
          2: "#8027B3",
          3: "#8510C8",
          4: "#BB53F6",
          5: "#B957F2",
        },
      },
      fontFamily: { monts: ["Montserrat", " sans-serif"] },
      // eslint-disable-next-line no-unused-vars
      backgroundImage: (theme) => ({
        // GRADIENT COLOR
        "grad-button": "linear-gradient(to right,#420565,#6A0B90,#811CBB)",
        "grad-blur": "linear-gradient(#3C363F99,#534D5633)",

        // BACKGROUND IMAGES
        hero: "url('/homepage/bg-hero.png')",
        "login-bg": "url('/login/login-bg.jpg')",
        "otp-bg": "url('/login/otp-bg.png')",
        "trial-bg": "url('/trial/trial-bg.png')",
      }),
      boxShadow: {
        button: "inset 3px 3px 3px 0 rgba(0, 0, 0, 0.25)",
        login: "0 4px 24px -1px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
