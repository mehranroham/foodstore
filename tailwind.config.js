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
      fontFamily: {
        'Dana-Medium': 'Dana-Medium',
        'Dana-Regular': 'Dana-Regular',
        'Dana-Bold': 'Dana-Bold',
        'Dana-Light': 'Dana-Light',
        'Morabba-Medium': 'Morabba-Medium',
        'Morabba-Bold': 'Morabba-Bold',
        'Morabba-Regular': 'Morabba-Regular',
        'Morabba-Light': 'Morabba-Light',
        'Poppins-Medium': 'Poppins-Medium',
        'Poppins-Regular': 'Poppins-Regular',
        'Poppins-Bold': 'Poppins-Bold',
        'Poppins-Light': 'Poppins-Light',
        'IRANSansX-Medium': 'IRANSansX-Medium',
        'IRANSansX-Regular': 'IRANSansX-Regular',
        'IRANSansX-Bold': 'IRANSansX-Bold',
        'IRANSansX-Light': 'IRANSansX-Light',
      },
    },
  },
  plugins: [],
};
