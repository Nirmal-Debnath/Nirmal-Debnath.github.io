module.exports = {
  darkMode: 'class', // Enables toggling dark mode via a CSS class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js", // if using Flowbite React
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // if using Flowbite React
  ],
};
