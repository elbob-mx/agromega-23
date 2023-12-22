/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      small: "0px",
      mobile: "359px",
      mobileHor: "640px",
      laptop: "768px",
      laptop: "976px",
      ipad: "1023px",
      hd: "1365px",
      fhd: "1440px",
    },
    extend: {
      colors: {
        azulAgro: "#1755A1",
        azulMid: "#297be0",
        azulAgroClaro: "#00ABEA",
        offWhite: "#F2F2F2",
        offBlack: "#181818",
        offGray: "#3A3A3A",
        guarany: "##FEBC06",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
        robotoCon: "Roboto Condensed, sans-serif",
      },
    },
  },
  plugins: ["flowbite/plugin"],
};
