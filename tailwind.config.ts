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
        "primary-light": "hsla(48, 39%, 69%, 1)",
        "primary-dark": " hsla(48, 32%, 34%, 1)",
      },
      backgroundImage: {
        gradient: "var(--default-gradient)",
      },
      backgroundColor: {
        grad: "var(--default-gradient)",
      },
    },
  },
};
export default config;
