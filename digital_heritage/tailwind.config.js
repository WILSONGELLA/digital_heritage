/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { ink: "#17324D", jade: "#2F6B4F", gold: "#C28A2B", rouge: "#A8343F", mist: "#E6ECE8", paper: "#F7F8F6" },
      keyframes: {
        fadeIn: { from: { opacity: 0, transform: "translateY(10px)" }, to: { opacity: 1, transform: "translateY(0)" } },
      },
      animation: { "fade-in": "fadeIn .45s ease-out both" },
    },
  },
  plugins: [],
};
