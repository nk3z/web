document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a:not(.main-nav a)");

    links.forEach(function (link) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
    });

    const sliders = document.querySelectorAll(".slider");
    sliders.forEach((slider, index) => {
        let currentIndex = 0;
        const slides = slider.querySelector(".slides");

        function prevSlide() {
            currentIndex = currentIndex === 0 ? slides.children.length - 1 : currentIndex - 1;
            updateSlidePosition();
        }

        function nextSlide() {
            currentIndex = currentIndex === slides.children.length - 1 ? 0 : currentIndex + 1;
            updateSlidePosition();
        }

        function updateSlidePosition() {
            const slideWidth = slides.children[0].clientWidth;
            slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }

        slider.querySelector(".prev").addEventListener("click", prevSlide);
        slider.querySelector(".next").addEventListener("click", nextSlide);
    });

    const videoPlayer = document.getElementById("videoPlayer5");
    const videoSources = [
        "videos/promos/video01.mp4",
        "videos/promos/video02.mp4",
        "videos/promos/video03.mp4",
        "videos/promos/video04.mp4",
        "videos/promos/video05.mp4",
        "videos/promos/video06.webm",
    ];
    let currentVideoIndex = 0;

    function changeVideo(index) {
        videoPlayer.classList.add("fade-out");

        setTimeout(() => {
            currentVideoIndex = index;
            videoPlayer.src = videoSources[currentVideoIndex];
            videoPlayer.load();
            videoPlayer.play();
            videoPlayer.classList.remove("fade-out");
            videoPlayer.classList.add("fade-in");
        }, 500);
    }

    function prevVideoSlide() {
        const newIndex = currentVideoIndex === 0 ? videoSources.length - 1 : currentVideoIndex - 1;
        changeVideo(newIndex);
    }

    function nextVideoSlide() {
        const newIndex = currentVideoIndex === videoSources.length - 1 ? 0 : currentVideoIndex + 1;
        changeVideo(newIndex);
    }

    document.querySelector(".video-slider-container .prev").addEventListener("click", prevVideoSlide);
    document.querySelector(".video-slider-container .next").addEventListener("click", nextVideoSlide);
});
