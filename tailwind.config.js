/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-light": "rgb(230 241 239)",
        "text-green": "rgb(61 138 158)",
        "text-green2": "rgb(33 95 106)",
        "text-gray": "rgb(119 133 152)",
        primary: "rgb(86 193 143)",
        "text-shade": "rgb(228 243 247)",
        "text-border": "rgb(194 206 219)",
        "text-primary": "rgb(1 64 75)",
        "primary-dark": "rgb(1 45 53)",
        "text-dark": "rgb(60 72 88)",
        "text-btnHover": "rgb(29 182 202)",
        "primary-light": "rgb(87 184 167)",
        "text-hover": "rgb(249 250 252)",
      },
      fontFamily: {
        readex: ['"Readex Pro"', "sans-serif"], 
        inter: ["Inter", "serif"],
      },
      backgroundImage: {
        "custom-footer-bg": "url('./assets/footer-img.png')",
        "custom-grid-bg": "url('./assets/grid.png')",
        "custom-map-bg": "url('./assets/map.png')",
      },
    },
  },
  plugins: [],
};
