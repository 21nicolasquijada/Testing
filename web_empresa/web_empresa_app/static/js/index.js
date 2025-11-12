// ===============================
// 1️⃣  MODAL DE SERVICIOS
// ===============================
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


// ===============================
// 2️⃣  SWIPER (CARRUSEL DE IMÁGENES)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  let isPaused = false; // bandera para saber si el usuario pausó con hover

  const swiper = new Swiper(".mySwiper", {
    effect: "cards",
    speed: 1500,
    rotate: true,
    grabCursor: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    on: {
      reachEnd: function () {
        const swiperInstance = this;

        // Solo volver al principio si NO está pausado
        if (!isPaused) {
          swiperInstance.autoplay.stop();
          setTimeout(() => {
            swiperInstance.slideTo(0, 1000);
            swiperInstance.autoplay.start();
          }, 3000); // tiempo de espera antes de volver
        }
      },
    },
  });

  // 🖱️ Pausar al pasar el mouse
  const swiperEl = document.querySelector(".mySwiper");

  swiperEl.addEventListener("mouseenter", () => {
    isPaused = true;          // marcar que está pausado
    swiper.autoplay.stop();   // detener autoplay
  });

  swiperEl.addEventListener("mouseleave", () => {
    isPaused = false;         // quitar pausa
    swiper.autoplay.start();  // reanudar autoplay
  });
});


// ===============================
// 3️⃣  FAQ (PREGUNTAS Y RESPUESTAS)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
      const item = question.parentElement;

      // Cerrar otros abiertos (opcional, para comportamiento tipo acordeón)
      document.querySelectorAll('.faq-item').forEach((i) => {
        if (i !== item) i.classList.remove('active');
      });

      // Alternar el seleccionado
      item.classList.toggle('active');
    });
  });
});
