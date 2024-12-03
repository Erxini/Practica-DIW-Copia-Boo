//cambios de imagenes en personalizacion cnc
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('imageContainer');
    const images = Array.from(container.getElementsByTagName('img'));
    const totalImages = images.length;

    setInterval(() => {
      const firstImage = images[0]; 
      const lastImage = images[images.length - 1];
      container.appendChild(firstImage);
      images.push(firstImage);
      images.shift();  
    }, 4000); // Intervalo de 2 segundos
  });

//evento del vertical nav burguer
const verticalNav = document.getElementById('verticalNav');
const navburger = document.getElementById('navburger');

const mostrarMenu=()=>{
  verticalNav.classList.toggle('hidden');
}
navburger.addEventListener('click',mostrarMenu);
  