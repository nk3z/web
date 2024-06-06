document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slider .slides");
    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;
    const cloneCount = 10; // Número de clones a crear
    let totalImages = slides[0].children.length;

    // Clona las imágenes para crear un bucle continuo
    for (let i = 0; i < cloneCount; i++) {
        slides.forEach(function(slider) {
            slider.innerHTML += slider.innerHTML;
        });
    }

    totalImages = slides[0].children.length;

    function slideNext() {
        currentIndex++;
        if (currentIndex === totalImages) {
            currentIndex = 0;
            slides.forEach(function(slider) {
                slider.style.transition = "none";
                slider.style.transform = `translateX(0)`;
                setTimeout(() => {
                    slider.style.transition = "transform 0.5s ease-in-out";
                    currentIndex++;
                    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
                }, 10);
            });
        } else {
            slides.forEach(function(slider) {
                slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            });
        }
    }

    setInterval(slideNext, 3000); // Cambiar cada 3 segundos

    function slidePrev() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalImages - 1;
            slides.forEach(function(slider) {
                slider.style.transition = "none";
                slider.style.transform = `translateX(-${totalImages * slideWidth}px)`;
                setTimeout(() => {
                    slider.style.transition = "transform 0.5s ease-in-out";
                    currentIndex--;
                    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
                }, 10);
            });
        } else {
            slides.forEach(function(slider) {
                slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            });
        }
    }

    function prevVideoSlide() {
        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.pause(); // Pausa el video actual
        videoPlayer.currentTime = 0; // Reinicia el tiempo del video
        videoPlayer.src = 'videos/video01.mp4'; // Cambia la fuente del video
        videoPlayer.load(); // Carga el video
        videoPlayer.play(); // Reproduce el nuevo video
    }

    function nextVideoSlide() {
        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.pause(); // Pausa el video actual
        videoPlayer.currentTime = 0; // Reinicia el tiempo del video
        videoPlayer.src = 'videos/video02.mp4'; // Cambia la fuente del video
        videoPlayer.load(); // Carga el video
        videoPlayer.play(); // Reproduce el nuevo video
    }

    document.querySelectorAll('.slider .prev').forEach(function(button) {
        button.addEventListener('click', slidePrev);
    });

    document.querySelectorAll('.slider .next').forEach(function(button) {
        button.addEventListener('click', slideNext);
    });

    document.querySelector('.video-slider .prev').addEventListener('click', prevVideoSlide);
    document.querySelector('.video-slider .next').addEventListener('click', nextVideoSlide);
});
