document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.filter-tab');
  const images = document.querySelectorAll('.image-item');
  const gallery = document.getElementById('gallery');

  const normalizeClass = str => str.trim().toLowerCase();

  // Filtrar imágenes por categoría
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = normalizeClass(tab.getAttribute('data-category'));
      console.log('Categoría seleccionada: ' + category);

      tabs.forEach(t => t.classList.remove('active-tab'));
      tab.classList.add('active-tab');

      // Mostrar/ocultar
      images.forEach(image => {
        const imageClasses = [...image.classList].map(normalizeClass);

        if (category === 'all' || imageClasses.includes(category)) {
          console.log('Imagen mostrada: ' + image.getAttribute('class'));
          image.style.display = 'block';
          setTimeout(() => image.classList.add('show'), 50);
        } else {
          image.classList.remove('show');
          setTimeout(() => (image.style.display = 'none'), 500);
        }
      });
      //Imagenes en la parte superior al clicar
      const galleryTop = gallery.offsetTop - 300;
      window.scrollTo({
        top: galleryTop,
        behavior: 'smooth',
      });
    });
  });

  //Animación 
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });
  images.forEach(image => observer.observe(image));
});