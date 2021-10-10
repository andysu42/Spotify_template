const { colors: defaultColors } = require('tailwindcss/defaultTheme')
// const colors = {
//   ...defaultColors,
//   ...{
//     'custom-yellow': {
//       '500': '#EDAE0A'
//     }
//   }
// }
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./index.html', './src/**/*.vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '450px',
      sm: '640px',
      md: '768px',
      lg: '964px',
      xl: '1799px'
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '05': '0.5px',
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '8': '8px'
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none'
    },
    extend: {
      colors: {
        'default-green': '#1DB954',
        'custom-yellow': '#BAA333',
        'default-gray': '#303030',
        'default-white': '#ffffff',
        'default-dark-red': '#4a1414'
      }
    }
  },
  variants: {},
  plugins: [require('tailwind-scrollbar-hide')]
}
