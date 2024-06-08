document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los enlaces de la página que no estén en el menú de navegación
    const links = document.querySelectorAll('a:not(.main-nav a)');

    // Añade el atributo target="_blank" y rel="noopener noreferrer" a cada enlace seleccionado
    links.forEach(function(link) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });

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
    const videoPlayers = [
        document.getElementById('videoPlayer1'),
        document.getElementById('videoPlayer2'),
        document.getElementById('videoPlayer3'),
        document.getElementById('videoPlayer4'),
        document.getElementById('videoPlayer5')
    ];

    const videoSources = [
        ['videos/tools/video01.mp4', 'videos/tools/video02.mp4', 'videos/tools/video03.mp4', 'videos/tools/video04.mp4', 'videos/tools/video05.mp4', 'videos/tools/video06.webm', 'videos/tools/video07.webm'],
        ['videos/tools2/video01.mp4', 'videos/tools2/video02.mp4'],
        ['videos/engines/video01.mp4', 'videos/engines/video02.webm'],
        ['videos/nodes/video01.mp4', 'videos/nodes/video02.webm'],
        ['videos/promos/video01.mp4', 'videos/promos/video02.mp4', 'videos/promos/video03.mp4', 'videos/promos/video04.mp4', 'videos/promos/video05.mp4', 'videos/promos/video06.webm']
    ];
    let currentVideoIndexes = Array(videoPlayers.length).fill(0);

    function changeVideo(index, playerIndex) {
        const videoPlayer = videoPlayers[playerIndex];
        videoPlayer.classList.add('fade-out');

        setTimeout(() => {
            currentVideoIndexes[playerIndex] = index;
            videoPlayer.src = videoSources[playerIndex][currentVideoIndexes[playerIndex]];
            videoPlayer.load();
            videoPlayer.play();
            videoPlayer.classList.remove('fade-out');
            videoPlayer.classList.add('fade-in');
        }, 500); // Tiempo que tarda el efecto fade-out
    }

    function prevVideoSlide(playerIndex) {
        const newIndex = (currentVideoIndexes[playerIndex] === 0) ? videoSources[playerIndex].length - 1 : currentVideoIndexes[playerIndex] - 1;
        changeVideo(newIndex, playerIndex);
    }

    function nextVideoSlide(playerIndex) {
        const newIndex = (currentVideoIndexes[playerIndex] === videoSources[playerIndex].length - 1) ? 0 : currentVideoIndexes[playerIndex] + 1;
        changeVideo(newIndex, playerIndex);
    }

    // Event listeners para los botones del slider de videos
    document.querySelectorAll('.video-slider-container .prev').forEach(function(button, index) {
        button.addEventListener('click', function() {
            prevVideoSlide(index);
        });
    });

    document.querySelectorAll('.video-slider-container .next').forEach(function(button, index) {
        button.addEventListener('click', function() {
            nextVideoSlide(index);
        });
    });
});
