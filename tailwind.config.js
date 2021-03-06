require(`dotenv`).config();

module.exports = {
  mode: 'jit',
  important: 'html',
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    safelist: [
      'opacity-0',
      'opacity-100'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '0': '0',
      '45': '45deg',
      '90': '90deg',
      '135': '135deg',
      '180': '180deg',
      '270': '270deg',
      '360': '360deg'
    },
    extend: {
      typography: (theme) => ({
        unprose: {
          css: {
            img: {
              marginTop: '0px',
              marginBottom: '0px',
              maxWidth: '100%'
            },
          },
        },
      }),
      colors: {
        main: `#${process.env.PRIMARY_COLOR}`,
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
