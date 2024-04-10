/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "/.index.html",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        westcoast: ["var(--font-westcoast)"],
        westcoastline: ["var(--font-westcoastline)"],
        krakens: ["var(--font-krakens)"],
      },
      colors: {
        primary: "#4C8D4B",
        pottBlack: "#161616",
        error: "#E03137",
        orange: "#FE964A",
        text: "#818B9A",
        textRed: "#FF0B0B",
        textGreen: "#00B900",
        textSecondary: "#747681",
      },
    },
  },
  plugins: [],
};
