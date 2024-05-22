/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'init-1': '#00296B',
        'init-2': '#003F88',
        'init-3': '#00509D',
        'init-4': '#FDC500',
        'init-5': '#FFD500',
      },
    },
  },
  plugins: [],
};
