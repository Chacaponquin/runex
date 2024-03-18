import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        input: "0 0 0 4px rgba(52, 152, 219, 0.4)",
        search: "0 0 0 4px rgba(52, 152, 219, 0.8)",
      },

      fontFamily: {
        fontRegular: "Poppins Regular",
        fontBold: "Poppins Bold",
        fontExtraBold: "Poppins Extra Bold",
        fontSemiBold: "Poppins Semi Bold",
        fontMedium: "Poppins Medium",
      },

      backgroundImage: {},

      colors: {
        blue: {
          "50": "#f2f8fd",
          "100": "#e3effb",
          "200": "#c1dff6",
          "300": "#8ac5ef",
          "400": "#4ca7e4",
          "500": "#3498db",
          "600": "#176fb2",
          "700": "#145990",
          "800": "#144c78",
          "900": "#164064",
          "950": "#0f2942",
        },

        violet: {
          "50": "#fbf6fd",
          "100": "#f5ecfb",
          "200": "#ebd9f5",
          "300": "#dcbaed",
          "400": "#c791e1",
          "500": "#af66cf",
          "600": "#8e44ad",
          "700": "#7a3794",
          "800": "#652f79",
          "900": "#562b64",
          "950": "#351240",
        },

        red: {
          "50": "#fef2f2",
          "100": "#fde3e3",
          "200": "#fdcccb",
          "300": "#faa8a7",
          "400": "#f57674",
          "500": "#eb4d4b",
          "600": "#d72d2b",
          "700": "#b52220",
          "800": "#96201e",
          "900": "#7d201f",
          "950": "#440c0b",
        },

        "light-gray": {
          "50": "#f6f8f9",
          "100": "#ecf0f2",
          "200": "#dfe6e9",
          "300": "#b0c2c9",
          "400": "#85a1ab",
          "500": "#668691",
          "600": "#516d78",
          "700": "#425862",
          "800": "#3a4b52",
          "900": "#334147",
          "950": "#222b2f",
        },

        gray: {
          "50": "#f6f8f8",
          "100": "#eaedef",
          "200": "#dae0e3",
          "300": "#c1cccf",
          "400": "#b2bec3",
          "500": "#8c9ca5",
          "600": "#7b8a95",
          "700": "#6e7b87",
          "800": "#5d6670",
          "900": "#4d555b",
          "950": "#31353a",
        },

        dark: {
          "50": "#f3f7f8",
          "100": "#e0eaed",
          "200": "#c5d6dc",
          "300": "#9db9c3",
          "400": "#6d94a3",
          "500": "#527888",
          "600": "#466474",
          "700": "#3e5460",
          "800": "#384852",
          "900": "#323e47",
          "950": "#1e272e",
        },

        yellow: {
          "50": "#fefbe8",
          "100": "#fff7c2",
          "200": "#ffec89",
          "300": "#ffdd59",
          "400": "#fdc312",
          "500": "#ecaa06",
          "600": "#cc8202",
          "700": "#a35b05",
          "800": "#86470d",
          "900": "#723b11",
          "950": "#431d05",
        },
      },

      screens: {
        exsm: { max: "400px" },
        esm: { max: "640px" },
        "2xl": { min: "1400px" },
      },
    },
  },
  plugins: [],
};
export default config;
