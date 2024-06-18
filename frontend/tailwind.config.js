/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#1A0232",
        white: "#ffffff",
        black: "#000000",
        "nav-bg": "#070109",
        "nav-text": "#F4F4F5",
        "nav-login": "#E9E2ED",
        "border-trial": "#BB53F6",
      },
      fontFamily: { monts: ["Montserrat", " sans-serif"] },
      // eslint-disable-next-line no-unused-vars
      backgroundImage: (theme) => ({
        "gradient-trial": "linear-gradient(to right,#3E075D,#8110C3)",
        hero: "url('/homepage/bg-hero.png')",
      }),
      boxShadow: {
        custom: "inset 3px 3px 3px 0 rgba(184, 58, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
