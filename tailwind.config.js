/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: 'Inter_600SemiBold',
        subtitle: 'Inter_500Medium',
        body: 'Inter_400Regular',
        bold: 'Inter_700Bold',
      },
    },
  },
  plugins: [],
};
