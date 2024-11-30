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
        'olivine': {
        '50': '#f5f9ec',
        '100': '#e8f2d5',
        '200': '#d3e5b1',
        '300': '#b6d482',
        '400': '#a1c567',
        '500': '#7ca53d',
        '600': '#5f832d',
        '700': '#4a6526',
        '800': '#3d5123',
        '900': '#354621',
        '950': '#1a250e',
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
    
      
    },
  },
  plugins: [],
}

