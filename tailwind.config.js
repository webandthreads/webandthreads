/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#E86D61",
          50: "#FDF5F4",
          100: "#FCECE9",
          200: "#F8CFC9",
          300: "#F4B2A9",
          400: "#ED7869",
          500: "#E86D61",
          600: "#D15F57",
        },
        secondary: {
          DEFAULT: "#F2C94C",
          50: "#FEFDF8",
          100: "#FEFBEF",
          200: "#FDF6D5",
          300: "#FCE0A9",
          400: "#FACB7D",
          500: "#F2C94C",
          600: "#DDBB44",
        },
      },
    },
  },
  plugins: [],
};
