module.exports = {
  content: ['./*.js',
  './views/*.ejs'
],
  theme: {
    extend: {
      'animation': {
        'text':'text 5s ease infinite',
    },
    'keyframes': {
      'text': {
          '0%, 100%': {
             'background-size':'200% 200%',
              'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
             'background-position': 'right center'
         }
        }, 
      },
      colors: {
        darkBlue: 'hsl(217, 28%, 15%)',
        darkBlue1: 'hsl(218, 28%, 13%)',
        darkBlue2: 'hsl(216, 53%, 9%)',
        darkBlue3: 'hsl(219, 30%, 18%)',
        cyan: 'hsl(180,66%,49%)',
        cyanLight: 'hsl(180,66%,69%)',
        darkLavender: '(107, 69, 150)',
        red: 'hsl(0, 87%, 67%)',
        grayishVoilet:'hsl(257%, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkVoilet: 'hsl(260, 8%, 14%',
      },
      spacing: {
        180:'32rem',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '668px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: (theme) => ({
        'logo-dark-mode': "url('../images/logo-dark-mode.svg')",
        'logo-light-mode': "url('../images/logo-light-mode.svg')",
        'curvy-dark-mode': "url('../images/bg-curvy-dark-mode.svg')",
        'curvy-light-mode': "url('../images/bg-curvy-light-mode.svg')",
      }),
    
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
}
