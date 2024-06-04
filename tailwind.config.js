/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        offWhite: '#faf9f63b',
        bluePrimay: '#0194C2',
        greenBlue200: '#08BFA9',
        blueGreen100: '#02AAB0',
        greenBlue400: '#00CDAC',
        buttonColor: '#028083'
      }
    },
  },
  plugins: [],
};
