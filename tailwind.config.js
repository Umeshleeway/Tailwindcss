const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        body: [
          'Lato',
          ...defaultTheme.fontFamily.sans,
        ],
        title: [
          'Trocchi',
          ...defaultTheme.fontFamily.serif,
        ] 
      },
      colors:{
        'primary':'#081f4e',

       'secondary':'#0083fd',

       'neutral':'#384d70'
      }
    },
  },
  plugins: [],
}
