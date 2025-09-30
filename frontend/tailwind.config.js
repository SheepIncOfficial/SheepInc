import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        forest: {
          "primary": "#1eb854",
          "secondary": "#1db8a0",
          "accent": "#1db8a0",
          "neutral": "#191d24",
          "base-100": "#171212",
          "base-content": "#ffffff", // white text
        },
      },
    ],
  },
};
