/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        /*editamos los colores desde js
        asi podemos tener los colores que queramos exactamente, 
        aunque el tiene los suyos que son muchos, tambien podemos editar
        el tipo de fuente utilizando fontFamily y probablemente mas cosas igual */
        fondo: "pink",
        texto: "green",
        'swamp-green': {
        '50': '#f4f6ef',
        '100': '#e5ebdc',
        '200': '#cdd9bd',
        '300': '#aec096',
        '400': '#99af7e',
        '500': '#738c56',
        '600': '#596f41',
        '700': '#465635',
        '800': '#3a462e',
        '900': '#333d2a',
        '950': '#192013',
    },
      },
      animation: {
        fade: 'fadeInOut 10s infinite',
      },
      keyframes: {
        fadeInOut: {
          'from': { opacity: '1' },
          'to': { opacity: '0' },
        },
      },
      animation: {
        fadeInScale: "fadeInScale 1s ease-in-out",
      },
      keyframes: {
        fadeInScale: {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },    
    },
  },
  plugins: [],
}

