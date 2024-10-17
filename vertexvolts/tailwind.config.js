/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '5': '5px', // Custom border width
      },
      borderColor: {
        'custom-white': 'rgba(255,255,255, 0.4)', // Custom border color
      },
      borderStyle: {
        'custom-dotted': 'dotted', // Custom border style
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(0%)', },
          '50%': { transform: 'translateY(-10%)', },
          '100%': { transform: 'translateY(0%)', },
          
        },
      },
      animation: {
        slideIn: 'slideIn 3s cubic-bezier(.34,.57,.33,1.25) forwards infinite',
      },
    },
  },
    extend: {
  },
  plugins: [],
}
