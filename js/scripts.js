document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides");
    const images = document.querySelectorAll(".slides img");
    const slideWidth = images[0].clientWidth;
    let currentIndex = 0;
    const cloneCount = 10; // Número de clones a crear
    let totalImages = images.length;

    // Clona las imágenes para crear un bucle continuo
    for (let i = 0; i < cloneCount; i++) {
        images.forEach(function(image) {
            const clone = image.cloneNode(true);
            slides.appendChild(clone);
        });
    }

    totalImages = slides.children.length;

    function slideNext() {
        currentIndex++;
        if (currentIndex === totalImages) {
            currentIndex = 0;
            slides.style.transition = "none";
            slides.style.transform = `translateX(0)`;
            setTimeout(() => {
                slides.style.transition = "transform 0.5s ease-in-out";
                currentIndex++;
                slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            }, 10);
        } else {
            slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
    }

    setInterval(slideNext, 3000); // Cambiar cada 3 segundos

    // Función para mostrar la imagen anterior
    function slidePrev() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalImages - 1;
            slides.style.transition = "none";
            slides.style.transform = `translateX(-${totalImages * slideWidth}px)`;
            setTimeout(() => {
                slides.style.transition = "transform 0.5s ease-in-out";
                currentIndex--;
                slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            }, 10);
        } else {
            slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
    }

    // Event listener para la flecha izquierda (prev)
    document.querySelector('.prev').addEventListener('click', slidePrev);

    // Event listener para la flecha derecha (next)
    document.querySelector('.next').addEventListener('click', slideNext);

    // Event listener para el teclado (flechas izquierda y derecha)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            slidePrev();
        } else if (event.key === 'ArrowRight') {
            slideNext();
        }
    });
});
