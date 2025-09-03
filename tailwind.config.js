/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-lora)'],
        sans: ['var(--font-montserrat)'],
      },
      colors: {
        'brand-maroon': '#800020',
        'brand-gold': '#FFD700',
        'brand-charcoal': '#36454F',
        'brand-off-white': '#FDFBF7',
      },
    },
  },
  plugins: [],
};