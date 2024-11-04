/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      roboto: ['Roboto', 'sans-serif'], // Custom font class for Roboto
      opacity: {
        85: '0.85', // For example, 85% opacity
      },
      lineHeight: {
        'custom-1.9': '1.9',
      },
    },
  },
  plugins: [],
};
