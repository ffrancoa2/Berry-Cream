/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        strawberry: "#F472B6",
        cream: "#FFF1E6",
        blush: "#FBCFE8",
        mint: "#A7F3D0",
        cocoa: "#4B2E2E",

        // 🌙 colores dark
        night: "#1F1B24",
        nightSoft: "#2A2433",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    }
  },
  plugins: [],
}
