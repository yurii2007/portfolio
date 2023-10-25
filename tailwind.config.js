/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'secondary-color': "#029cdc"
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(148.92deg , #029cdc , #23274c)",
      },
    },
  },
  plugins: [],
};
