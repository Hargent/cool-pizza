/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,jsx,ts}"],
  theme: {
    fontFamily:{
      sans:"Roboto Mono, monospace"
    },
    extend: {
      height:{screen: "100dvh"}
    }
  },
  plugins: []
};
