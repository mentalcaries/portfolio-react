module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

        'hero-image':"url('./images/hero-background.png')",
      }
    },
    colors:{
      'main': '#0F1626',
      'paragraph':'#004E7C'
    },
  },
  plugins: [],
}
