/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      small: "0px",
      mobile: "359px",
      mobileHor: "640px",
      tablet: "768px",
      laptop: "976px",
      ipad: "1023px",
      hd: "1365px",
      fhd: "1440px",
    },
    extend: {
      colors: {
        azulAgro: "#1755A1",
        azulAgroClaro: "#00ABEA",
        offWhite: "#F2F2F2",
        offBlack: "#181818",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
        robotoCon: "Roboto Condensed, sans-serif",
      },
    },
  },
  plugins: ["flowbite/plugin"],
};
