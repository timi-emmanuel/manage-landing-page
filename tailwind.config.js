/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
   container:{center:true},
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },

    extend: {
      colors:{
        BrightRed:' hsl(12, 88%, 59%)',
        BrightRedLight:' hsl(12, 88%, 69%)',
        BrightRedSupLight:'hsl(12, 88%, 95%)',
        DarkBlue: 'hsl(228, 39%, 23%)',
        DarkGrayishBlue: 'hsl(227, 12%, 61%)',
        VeryDarkBlue: 'hsl(233, 12%, 13%)',
        VeryPaleRed: 'hsl(13, 100%, 96%)',
        VeryLightGray:' hsl(0, 0%, 98%)',    
      },
      fontFamily:{
        body:['Be Vietnam Pro'],        
      },

      
    },
  },
  plugins: [],
}

