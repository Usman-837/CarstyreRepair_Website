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
      fontSize: {
        fifteen: '15px',
        seventeen: '17px',
        twintytwo: '22px',
      },
      padding: {
        fifteen: '15px',
        thirtyfive: '35px',
        fiftyfive: '55px'
      },
      margin: {
        twintytwo: '22px',
      },
      width: {
        'onefifty': '150px',
        'twenty': '20px',
        'seven': '7px',
        'five': '5px'
      },
      maxWidth: {
        '300': '300px',
        '200': '200px'
      },
      height: {
        'sixty': '60px',
        'twenty': '20px',
        'seven': '7px'
      }
    },
  },
  plugins: [],
};
