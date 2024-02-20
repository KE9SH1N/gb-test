/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'xs': '375px',
      // => @media (min-width: 320px)

      'sm': '425px',
      // => @media (min-width: 576px)

      // 'sm': '640px',
      // => @media (min-width: 640px)

      'md': '768px',
      // => @media (min-width: 768px)

      'lg': '1024px',
      // => @media (min-width: 1024px)

      'xl': '1440px',
      // => @media (min-width: 1280px)

      // '2xl': '1536px',
      // => @media (min-width: 1536px)
    },

    container:{
      padding:{
        'xs':'1rem',
        'sm': '2rem',
        'md': '2.75rem',
        'lg': '2rem',
        'xl': '1rem',
      },
    },
    
    // custom fonts according to the existing design
    fontFamily:{
      Bangali:['Noto Sans Bengali', 'sans-serif'],
      Roboto:['Roboto', 'sans-serif'],
    },



    extend: {
      
    // custom colors according to the existing design
      colors:{
        'navBg':'#f3f3f3',
        'buttonBar': '#f68822',
        'footerBg':'#1e1e1e',
        'borderLine':'#e7e7e7',
        'borderCard':'#e4e4e4',
        'primaryText':'#333333',
        'secondaryText':'#ffffff',
        'tertiaryText':'#ff7400',
        'sectionheadText':'#242424',
        'placeholderText':'#777777',
        'priceText':'#ff8f3a',
        'subtextBg':'#fef3e9',
        'cardtagBg':'#fef3e9',
        'cardprimaryBg':'#5cbf3b',
        'cardtagText':'#ffffff',
        'buttonBg':'#f68821',
        'buttonhoverBg':'#221305',
        'footermenuText':'#a5a5a5',
        'footerBorder':'#404040',
        'footerSocialicon':'#ff6700',
        'starMark': '#eabe12',
        'lineThrough':'#dddddd',
        'discountBg': '#ff473a',
      
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

