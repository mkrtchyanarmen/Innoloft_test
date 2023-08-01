/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#272E71',
        black: '#374151',
      },
      maxWidth: {
        360: '90rem',
      },
    },
  },
  plugins: [],
};
