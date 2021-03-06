module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1500px",
      // => @media (min-width: 1400px) { ... }
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d42b4a",
          secondary: "#ad243e",
          accent: "#ffcda3",
          neutral: "#989898",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
