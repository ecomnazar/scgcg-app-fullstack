/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#9553FF",
          50: "#f6f2ff",
          100: "#eee8ff",
          200: "#ded4ff",
          300: "#c8b1ff",
          400: "#ae85ff",
          500: "#9553ff",
          600: "#8930f7",
          700: "#7a1ee3",
          800: "#6618bf",
          900: "#55169c",
          950: "#340b6a",
        },
        secondary: "#64748B",
        dark: "#272E35",
      },
      borderRadius: {
        sm: "6px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
