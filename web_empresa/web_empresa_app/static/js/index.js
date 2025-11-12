document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener elementos del DOM
    const modal = document.getElementById('service-modal');
    const closeButton = document.querySelector('.close-button');
    // Seleccionamos todas las tarjetas para agregarles el evento de click
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Contenido del modal que se va a actualizar
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImage = document.getElementById('modal-image');

    // 2. Función para abrir el modal
    function openModal(card) {
        // Rellenar el contenido del modal con los datos del atributo data-*
        modalTitle.textContent = card.dataset.title;
        modalDescription.textContent = card.dataset.detail;
        modalImage.src = card.dataset.imageSrc;
        modalImage.alt = card.dataset.title;

        modal.style.display = 'block'; // Mostrar el pop-up
    }

    // 3. Función para cerrar el modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // 4. Asignar el evento CLICK a todas las tarjetas
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            openModal(card);
        });
    });

    // 5. Asignar eventos de cierre

    // Cerrar al hacer clic en la X
    closeButton.addEventListener('click', closeModal);

    // Cerrar al hacer clic fuera del modal (en el telón)
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Cerrar al presionar la tecla ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {

    // autoplay: {
    //   delay: 3000, // Tiempo entre slides (ms)
    //   disableOnInteraction: false, // Sigue auto-play al interactuar
    // },

    effect: "cards", // Cambia a "fade", "cube", "coverflow", "flip"
    speed: 600,
    rotate : true,
    grabCursor : true, // Velocidad de transición
  });
});