import type { Config } from "tailwindcss";
import * as defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        tablet: "768px",
        containerMax: "1312px",
        desktop: "1440px",
      },
      fontFamily: {
        sans: ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "pulse-slow": "pulse 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
