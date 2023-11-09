import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sSan3: ["var(--font-sSan3)"],
        rubik: ["var(--font-rubik)"],
      },
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
