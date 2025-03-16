/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto_Mono: ["Roboto Mono", "monospace"],
        Roboto_slab: ["Roboto Slab", "serif"],
        Poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        deep_green: "#224F34",
        light_green: "#C2EFD4",
        medium_green: "#6BC785",
        mygarp_grey: "#6F6F6F",
        mygarp_muted_grey: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
