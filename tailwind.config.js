
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
    colors: {'warning':'#ffc107', 'dark':'#212529', 'cyan-600': '#fefe33','secondary':'#6c757d', 'light':'#f8f9fa', 'verde': '#84ff84', 'violeta':'#6b1882', 'accent':'#f3321f'
             
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



