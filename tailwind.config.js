/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BebasNeue: "'Bebas Neue', sans-serif",
        MochiyPopOne: "'Mochiy Pop One', sans-serif",
        RobotoSlab: "'Roboto Slab', sans-serif",
        Poppins: "'Poppins', sans-serif",
        ArialRoundedMTBold: "'Arial Rounded MT Bold', sans-serif",
      },
      colors: {
        PrimaryBg: "#E9F4EE",
      },
    },
  },
  plugins: [],
}