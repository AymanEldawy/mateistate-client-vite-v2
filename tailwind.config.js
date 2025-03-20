/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    // extend: {},
    colors: ({ colors }) => ({
      ...colors,
      primary: "#144479",
      secondary: "",
      "dark-bg": "#212121",
      "dark-border": "#303030",
      "dark-text": "",
      "dark-primary": "",
      "light-bg": "",
      "light-border": "",
      "light-color": "",
      "light-primary": "",
      // "light-green": "#008776",
      "light-green": "#3b82f6",
      "dark-green": "#2a6fdf",
    }),
  },
  plugins: [],
};
