/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e2f3f5",
        secondary: "#22d1ee",
        success: "#3d5af1",
        danger: "#0e153a",
      },
    },
  },
  plugins: [],
};
