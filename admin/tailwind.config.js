/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#e63946",
        secondary: "#f1f5f9",
        tertiary: "#14213D",
        blackRgba: "rgba(0,0,0, 0.6)",
      },
      fontFamily: {
        logoFont: ['ADLaM Display', 'cursive'],
        quicksand: ['Roboto', 'sans-serif'],
      }
    }
  },
  plugins: [],
  
}
