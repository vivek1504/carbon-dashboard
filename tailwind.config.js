/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        highlights: "var(--highlights-font-family)",
        "montserrat-10px-regular": "var(--montserrat-10px-regular-font-family)",
        "montserrat-110px-regular": "var(--montserrat-110px-regular-font-family)",
        "montserrat-16px-regular": "var(--montserrat-16px-regular-font-family)",
        "montserrat-26px-regular": "var(--montserrat-26px-regular-font-family)",
        "montserrat-42px-regular": "var(--montserrat-42px-regular-font-family)",
        "montserrat-68px-regular": "var(--montserrat-68px-regular-font-family)",
        "montserrat-6px-regular": "var(--montserrat-6px-regular-font-family)",
        "montserrat-heading": "var(--montserrat-heading-font-family)",
        "sub-heading": "var(--sub-heading-font-family)",
      },
    },
  },
  plugins: [],
};
