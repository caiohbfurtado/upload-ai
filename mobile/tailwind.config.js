/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: 'Inter_400Regular',
        head: 'Inter_700Bold',
        black: 'Inter_900Black',
      },
      borderWidth: {
        1: 1,
      },
    },
  },
  plugins: [],
}
