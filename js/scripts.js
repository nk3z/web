document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const currentTheme = localStorage.getItem("theme") || "dark";
    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll(".main-nav a");

    if (currentTheme === "light") {
        document.body.classList.add("light-theme");
        themeIcon.src = "images/moon.svg";
    }

    themeToggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");
        const theme = document.body.classList.contains("light-theme") ? "light" : "dark";
        localStorage.setItem("theme", theme);

        if (theme === "light") {
            themeIcon.src = "images/moon.svg";
        } else {
            themeIcon.src = "images/sun.svg";
        }
    });

    // Guardar la posición de desplazamiento antes de cambiar de idioma
    document.querySelectorAll('.language-switch').forEach(link => {
        link.addEventListener('click', function (e) {
            const scrollPosition = window.scrollY;
            localStorage.setItem('scrollPosition', scrollPosition);
        });
    });

    // Restaurar la posición de desplazamiento al cargar la página
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
        localStorage.removeItem('scrollPosition');
    }

    // Ajustar el desplazamiento para que el título de la sección no quede tapado por el menú
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            if (!this.classList.contains('language-switch')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                const headerOffset = document.querySelector('.main-nav').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Remover la clase active de todos los enlaces
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                // Agregar la clase active al enlace seleccionado
                this.classList.add('active');
            }
        });
    });

    const links = document.querySelectorAll("a:not(.main-nav a)");

    links.forEach(function (link) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
    });

    const sliders = document.querySelectorAll(".slider");
    sliders.forEach((slider) => {
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
        "videos/promo01.webm",
        "videos/promo02.webm",
        "videos/promo03.webm",
        "videos/promo04.webm",
        "videos/promo05.webm",
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

    // Highlighting active section in menu
    function onScroll() {
        let scrollPos = window.scrollY + document.querySelector('.main-nav').offsetHeight;

        sections.forEach((section) => {
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Call onScroll to set the initial state
});
