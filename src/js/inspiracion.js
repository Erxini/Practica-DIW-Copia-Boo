document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.filter-tab');
  const images = document.querySelectorAll('.image-item');
  const gallery = document.getElementById('gallery');

  // Normalizar nombres de clases para evitar errores por espacios o mayúsculas
  const normalizeClass = str => str.trim().toLowerCase();

  // Filtrar imágenes por categoría
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = normalizeClass(tab.getAttribute('data-category'));
      console.log(`Categoría seleccionada: ${category}`);

      // Actualizar pestañas activas
      tabs.forEach(t => t.classList.remove('active-tab'));
      tab.classList.add('active-tab');

      // Mostrar/ocultar imágenes según la categoría seleccionada
      images.forEach(image => {
        const imageClasses = [...image.classList].map(normalizeClass);

        if (category === 'all' || imageClasses.includes(category)) {
          console.log(`Imagen mostrada: ${image.getAttribute('class')}`);
          image.style.display = 'block'; // Mostrar
          setTimeout(() => image.classList.add('show'), 50); // Agregar animación
        } else {
          image.classList.remove('show');
          setTimeout(() => (image.style.display = 'none'), 500); // Esconder después de animación
        }
      });

      // Desplazarse hacia la parte superior de la galería
      const galleryTop = gallery.offsetTop-300; // Obtiene la posición superior del contenedor
      window.scrollTo({
        top: galleryTop,
        behavior: 'smooth',
      });
    });
  });

  // Agregar animación al hacer scroll (IntersectionObserver)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  images.forEach(image => observer.observe(image));
});
