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
  },
  daisyui: {
    themes: ["light", "dark", "retro", "cupcake", "luxury", "dracula"],
  },
  plugins: [require("daisyui")],
};
export default config;
