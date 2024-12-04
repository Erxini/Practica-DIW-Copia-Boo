document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.filter-tab');
    const images = document.querySelectorAll('.image-item');
  
    // Filtrar imágenes por categoría
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const category = tab.getAttribute('data-category');
        
        // Actualizar pestañas activas
        tabs.forEach(t => t.classList.remove('active-tab'));
        tab.classList.add('active-tab');
  
        // Mostrar/ocultar imágenes
        images.forEach(image => {
          image.classList.remove('show');
          if (category === 'all' || image.classList.contains(category)) {
            image.classList.add('show');
          }
        });
      });
    });
  
    // Animar imágenes al hacer scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });
  
    images.forEach(image => {
      observer.observe(image);
    });
  });
  