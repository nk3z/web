// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    let index = 0;

    function showNextImage() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        slides.style.transform = `translateX(-${index * 100 / images.length}%)`;
    }

    setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos
});
