
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
    colors: {'chokolate': '#8a3324', 'cyan-600': '#fefe33', 'verde': '#84ff84', 'violeta':'#6b1882'
             
            },
fontFamily : {
  'serif'    : ['Merriweather', ...defaultTheme.fontFamily.serif ],
//  serif    : ["'Merriweather'", ...defaultTheme.fontFamily.serif ],
  Merriweather: "'Merriweather', serif"
}
}, 
  },
  plugins: [require('@tailwindcss/forms')],
}



