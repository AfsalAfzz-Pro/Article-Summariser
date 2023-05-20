module.exports = {
  content: ['./src/**/*.{html,js,jsx,css}'],
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
  
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
    },
  },
 
  layers: {
    base: {
      utilities: {
        'font-satoshi': {
          'font-family': 'Satoshi',
        },
      },
    },
  },
};
