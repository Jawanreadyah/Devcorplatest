/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PP Mori', 'system-ui', 'sans-serif'],
        display: ['PP Mori', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        semibold: 600,
        extrabold: 800,
      },
    },
  },
  plugins: [],
};