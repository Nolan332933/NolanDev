/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    
      spacing: {
        'theme-sm': '16px',
        'theme-md': '260px',
        'theme-lg': '190px',
        'theme-xl': '260px',
        'theme-2xl': '440px',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
