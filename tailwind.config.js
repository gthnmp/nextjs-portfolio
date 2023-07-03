/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      invert: {
        25: '.25',
        50: '.5',
        75: '.75',
      },
      fontFamily: {
        sans : ['var(--font-open-sans)'],
        serif : ['var(--font-noto-serif)'],
      },
      borderWidth:{
        '1/4':'0.25px',
        '1/2':'0.5px',
        '1':'1px'
      }
    },
  },
  plugins: [],
}
