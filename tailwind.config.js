/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-themer')({
      themes: [
        {
          name: 'dark-theme',
          extend: {
            colors: {
              black: 'white',
              white: 'black',
              'gray-500': 'white',
              'gray-700': 'lightgrey',
            },
          },
        },
      ]
    })
  ],
}
