const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        warning: "#ffc107",
        dark: "#212529",
        secondary: "#6c757d",
        light: "#f8f9fa",
        brand: "#84ff84",
        primary: "#6b1882",
        accent: "#f3321f",
      },
      fontFamily: {
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
