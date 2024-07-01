/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#1A0232",
        white: "#ffffff",
        black: "#000000",
        firstShade: "#F4F4F5",
        secondShade: "#E9E2ED",
        thirdShade: "#C6C4C7",
        "nav-bg": "#070109",
        "border-1": "#BB53F6",
        "border-2": "#8510C8",
        "border-3": "#79747e",
        "border-4": "#B957F2",
        placeHolder: "#A9A9A9",
      },
      fontFamily: { monts: ["Montserrat", " sans-serif"] },
      // eslint-disable-next-line no-unused-vars
      backgroundImage: (theme) => ({
        // GRADIENT COLOR
        "gradient-trial": "linear-gradient(to right,#3E075D,#8110C3)",
        "gradient-login": "linear-gradient(#191A1F99,#21222A33)",
        // BACKGROUND IMAGES
        hero: "url('/homepage/bg-hero.png')",
        "login-bg": "url('/login/login-bg.jpg')",
        "otp-bg": "url('/login/otp-bg.png')",
        "trial-bg": "url('/trial/trial-bg.png')",
      }),
      boxShadow: {
        button: "inset 3px 3px 3px 0 rgba(184, 58, 255, 0.5)",
        login: "0 4px 24px -1px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
