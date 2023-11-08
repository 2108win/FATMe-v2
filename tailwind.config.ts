import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F7AB0A",
      },
    },
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#F7AB0A",
            secondary: "#e26826",
            accent: "#629bf7",
            neutral: "#181523",
            "base-100": "#fafafa",
            info: "#70c0d7",
            success: "#105638",
            warning: "#f19a04",
            error: "#f4667e",
          },
        },
        "dark",
      ],
    },
  },
  plugins: [require("daisyui")],
};
export default config;
