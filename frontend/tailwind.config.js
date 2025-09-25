/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ocean-themed color palette
        'ocean-deep': '#0D2C54',     // Deep navy blue background
        'sand-light': '#F1E4D3',     // Off-white/sandy text color
        'sun-bright': '#FFC857',     // Bright sunny yellow accent
        'coral-warm': '#F97120',     // Coral accent alternative
        'wave-blue': '#1E40AF',      // Wave blue for highlights
        'sea-foam': '#A7F3D0',       // Light sea foam green
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'wave': 'wave 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
