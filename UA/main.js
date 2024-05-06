document.addEventListener("DOMContentLoaded", function () {
    const img = document.querySelector(".img");
    const div = document.querySelector(".theme");
    const container = document.querySelector(".container-fluid");
    div.classList.remove("scrolled");
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 200) {
            div.classList.add("scrolled");
            container.classList.remove('scrolled');
        } else {
            div.classList.remove("scrolled");
            container.classList.add('scrolled');
        };
    });

    let offset = window.innerWidth < 800 ? 200 : 140;

    function smoothScroll(targetId) {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const targetPosition = targetElement.offsetTop;

            window.scrollTo({
                top: targetPosition - offset,
                behavior: 'auto'
            });
        }
    }

    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function (event) {
        event.preventDefault();
        smoothScroll('#about');
    });

    const historyLink = document.querySelector('.nav-link[href="#history"]');
    historyLink.addEventListener('click', function (event) {
        event.preventDefault();
        smoothScroll('#history');
    });


    window.addEventListener('resize', function () {
        offset = window.innerWidth < 800 ? 200 : 140;
    });

    const toggleSwitch = document.getElementById("switch");

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === "dark-theme") {
            toggleSwitch.checked = true;
        }
    }

    function updateLogoImage() {
        const logoImage = document.getElementById('logo-image');
        const isDarkTheme = document.body.classList.contains('dark-theme');

        if (isDarkTheme) {
            logoImage.src = '../Data/Images/24.png';
        } else {
            logoImage.src = '../Data/Images/25.png';
        }
    }

    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "");
        }

        updateLogoImage();
    });

    window.onload = function () {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme && savedTheme === "dark-theme") {
            document.body.classList.add("dark-theme");
            toggleSwitch.checked = true;
        }

        updateLogoImage();
    };

    window.addEventListener('scroll', function () {
        const scrolled = window.scrollY;
        const header = document.querySelector('.header');
        header.style.backgroundPositionY = (scrolled * 0.5) + 'px';
    });

    function isElementAtDistance(elem, distance) {
        const rect = elem.getBoundingClientRect();
        return rect.top <= window.innerHeight - distance;
    }

    function activateClassOnScroll() {
        const elements = document.querySelectorAll('.featurette');

        elements.forEach(elem => {
            if (isElementAtDistance(elem, 200)) {
                elem.querySelector('.left').classList.remove('scrolled');
                elem.querySelector('.right').classList.remove('scrolled');
            } else {
                elem.querySelector('.left').classList.add('scrolled');
                elem.querySelector('.right').classList.add('scrolled');
            }
        });
    }

    window.addEventListener('scroll', activateClassOnScroll);

    activateClassOnScroll();

    const settingsDropdown = document.getElementById("settingsDropdown");
    const languageDropdown = document.getElementById("languageDropdown");
    const languageDropdownMenu = document.getElementById("languageDropdownMenu");

    settingsDropdown.addEventListener("mouseenter", function () {
        // Показати меню "Налаштування"
        settingsDropdown.querySelector('.dropdown-menu').classList.add("show");
    });

    settingsDropdown.addEventListener("mouseleave", function () {
        // Сховати меню "Налаштування"
        settingsDropdown.querySelector('.dropdown-menu').classList.remove("show");
    });

    languageDropdown.addEventListener("mouseenter", function () {
        // Показати меню "Мова"
        languageDropdownMenu.classList.add("show");
    });

    languageDropdown.addEventListener("mouseleave", function () {
        // Сховати меню "Мова"
        languageDropdownMenu.classList.remove("show");
    });

});