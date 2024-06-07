// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    // Variables y funciones para los sliders de imágenes
    let currentIndex = 0;

    function prevSlide() {
        const slides = document.querySelector('.slider .slides');
        currentIndex = (currentIndex === 0) ? slides.children.length - 1 : currentIndex - 1;
        updateSlidePosition(slides);
    }

    function nextSlide() {
        const slides = document.querySelector('.slider .slides');
        currentIndex = (currentIndex === slides.children.length - 1) ? 0 : currentIndex + 1;
        updateSlidePosition(slides);
    }

    function updateSlidePosition(slides) {
        const slideWidth = slides.children[0].clientWidth;
        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Event listeners para los botones del slider de imágenes
    document.querySelectorAll('.slider .prev').forEach(function(button) {
        button.addEventListener('click', prevSlide);
    });

    document.querySelectorAll('.slider .next').forEach(function(button) {
        button.addEventListener('click', nextSlide);
    });

    // Variables y funciones para los sliders de videos
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSources = ['videos/video01.mp4', 'videos/video02.mp4'];
    let currentVideoIndex = 0;

    function changeVideo(index) {
        videoPlayer.classList.add('fade-out');

        setTimeout(() => {
            currentVideoIndex = index;
            videoPlayer.src = videoSources[currentVideoIndex];
            videoPlayer.load();
            videoPlayer.play();
            videoPlayer.classList.remove('fade-out');
            videoPlayer.classList.add('fade-in');
        }, 500); // Tiempo que tarda el efecto fade-out
    }

    function prevVideoSlide() {
        const newIndex = (currentVideoIndex === 0) ? videoSources.length - 1 : currentVideoIndex - 1;
        changeVideo(newIndex);
    }

    function nextVideoSlide() {
        const newIndex = (currentVideoIndex === videoSources.length - 1) ? 0 : currentVideoIndex + 1;
        changeVideo(newIndex);
    }

    // Event listeners para los botones del slider de videos
    document.querySelector('.video-slider-container .prev').addEventListener('click', prevVideoSlide);
    document.querySelector('.video-slider-container .next').addEventListener('click', nextVideoSlide);
});
