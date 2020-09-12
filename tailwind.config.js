const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  experimental: {
    applyComplexClasses: true,
    uniformColorPalette: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    extendedFontSizeScale: true,
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      './components/**/*.js',
      './pages/**/*.js',
    ],
    options: {
      defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || []
    }
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
