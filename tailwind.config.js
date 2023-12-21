/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Inter'],
        'secondary': ['Poppins'],
        'sub': ['Lato'],
      },
      colors: {
        
        'primary': '#6B3CC9',
        'secondary': '#F28D35',
        'analogous-1': '#6A44F2',
        'analogous-2': '#1CBDDD',
        'triadic': '#52378C',
        'bgdark-1': '#78BF91',
        'bgdark-2': '#4DCA79',
        'tdark': '#2F2F2F',
        'tlight': '#535a75 ',
        'tsubtle': '#9C9991',
        'taccent1': '#E2F2FE',
        'taccent2': '#FFF8E0',
        'error': '#FFF8E0',
        'success': '#2E9E61',
        
      }
    },
  },
  plugins: [],
}

