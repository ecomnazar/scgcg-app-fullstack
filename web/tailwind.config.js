/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9553FF",
        secondary: "#64748B",
      },
      borderRadius: {
        sm: "6px",
      },
    },
  },
  plugins: [],
};
