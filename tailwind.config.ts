import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: "1920px",
        mobilexl: "425px",
        mobilemd: "375px",
        mobilesm: "320px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        myFont: ["var(--font-ppneuemontreal)"],
      },
    },
  },
  plugins: [],
};
export default config;
