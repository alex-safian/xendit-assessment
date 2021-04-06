module.exports = {
  important: "#body",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: "Open Sans, sans-serif",
    },
    container: {
      padding: "1rem",
      center: true,
    },
    extend: {
      colors: {
        "brand-color": "#426BB4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
