/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    // extend: {},
    colors: ({ colors }) => ({
      ...colors,
      "primary-dark": "#ba318b",
      "primary-blue": "#0079FF",
      "primary-green": "#00DFA2",
      "primary-yellow": "#F6FA70",
      "primary-red": "#FF0060",
      "dark-blue": "#0C134F",
      primary: "#f621ac",
    }),
  },
  plugins: [],
};
