document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

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
            }, 0);
        } else {
            currentIndex++;
            showSlide(currentIndex);
        }
    }

    function prevSlide() {
        if (currentIndex === 0) {
            currentIndex = images.length - 1;
            setTimeout(() => {
                slides.style.transition = 'none';
                showSlide(currentIndex);
            }, 0);
        } else {
            currentIndex--;
            showSlide(currentIndex);
        }
    }

    setInterval(nextSlide, 3000);

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
});
