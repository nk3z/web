document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');

    let currentIndex = 0;

    function showSlide(index) {
        slides.style.transition = 'transform 0.5s ease-in-out';
        slides.style.transform = `translateX(${-index * 20}%)`;
    }

    function nextSlide() {
        if (currentIndex === images.length - 1) {
            currentIndex = 0;
            setTimeout(() => {
                slides.style.transition = 'none';
                showSlide(currentIndex);
            }, 0); // Ajusta el tiempo de espera para que se aplique inmediatamente
        } else {
            currentIndex++;
            showSlide(currentIndex);
        }
    }

    setInterval(nextSlide, 3000);
});
