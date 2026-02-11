/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        'primary': '#3b82f6',
        'secondary': '#10b981', 
        'accent': '#9b70ff',
        'essence': '#595858d4',
        'custom-colours': {
          100: '#ffffff',
          200: '#f3e7fc',
          300: '#f9f3fe',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#b9ccf4',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      fontFamily: {
        
        roboto: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
