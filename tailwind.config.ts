import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-primary-color": "rgb(var(--primary)  / <alpha-value>)",
        "custom-secondary-color": "rgb(var(--secondary)  / <alpha-value>)",
        "custom-gray-color": "rgb(var(--gray)  / <alpha-value>)",
      },
      borderRadius: {
        "40": "40px",
      },
      boxShadow: {
        "b-5": "0 5px black",
      },
    },
  },

  plugins: [],
};

export default config;
