/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-fast': 'pulse 1s infinite', // Adjust timing for faster pulse
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' }, // Start 
          '50%': { transform: 'scale(1.2)' },   // Expand at mid-point
        },
      },
      fontFamily: {
        gugi: ['Gugi', 'sans-serif'], // Gugi font
        climate: ['Climate Crisis', 'sans-serif'], // Climate Crisis font
      },
      screens: {
        'sm': '370px',    // Small screens (370px and up)
        'md': '414px',    // Medium screens (414px and up)
        'lg': '1440px',   // Large screens (1440px and up)
        'xl': '1920px',   // Extra large screens (1920px and up)
      },
      colors: {
        'dark-purple': '#321D41',
        'primary-purple': '#250448',
        'accent-purple': '#6d28d9',
      },
      
    },
  },
  plugins: [],
}

