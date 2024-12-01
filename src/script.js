

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('imageContainer');
    const images = Array.from(container.getElementsByTagName('img'));
    const totalImages = images.length;
  
    // Establecer el intervalo de cambio de imágenes
    setInterval(() => {
      const firstImage = images[0];  // Imagen más a la izquierda
      const lastImage = images[images.length - 1];  // Imagen más a la derecha
  
      // Mover la primera imagen a la última posición
      container.appendChild(firstImage);
  
      // Actualizar el array de imágenes
      images.push(firstImage);
      images.shift(); // Eliminar la imagen más a la izquierda del array
  
    }, 4000); // Intervalo de 2 segundos entre cada movimiento
  });
  