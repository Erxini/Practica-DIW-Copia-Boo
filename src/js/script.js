//Cambios de imagenes en personalizacion cnc
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
    }, 4000);
  });

//Evento del vertical nav burguer
const verticalNav = document.getElementById('verticalNav');
const navburger = document.getElementById('navburger');

const mostrarMenu=()=>{
  verticalNav.classList.toggle('hidden');
}
navburger.addEventListener('click',mostrarMenu);
 


//Modal
document.addEventListener("DOMContentLoaded", () => {
  const cookieModal = document.getElementById("cookieModal");
  const acceptCookies = document.getElementById("acceptCookies");

  // Comprobar si las cookies están aceptadas
  if (localStorage.getItem("cookiesAccepted") === "true") {
    cookieModal.style.display = "none";
  } else {
    cookieModal.style.display = "flex";
  }

  acceptCookies.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieModal.style.display = "none";
  });
});
