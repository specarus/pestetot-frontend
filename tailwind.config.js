/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#59A96A",
        cream: "#f6f6f6",
      },
      screens: {
        desktop: "1750px",
        laptop: "1300px",
      },
    },
  },

  plugins: [],
};
