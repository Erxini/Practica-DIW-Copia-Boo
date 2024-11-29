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
      }
    },
  },
  plugins: [],
}

