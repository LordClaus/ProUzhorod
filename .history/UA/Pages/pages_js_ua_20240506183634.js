document.addEventListener('DOMContentLoaded', function () {


    function updateLogoImage() {
        const logoImage = document.getElementById('logo-image');
        const isDarkTheme = document.body.classList.contains('dark-theme');

        if (isDarkTheme) {
            logoImage.src = '../Data/Images/24.png';
        } else {
            logoImage.src = '../Data/Images/25.png';
        }
    }

    const toggleSwitch = document.getElementById("switch");

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === "dark-theme") {
            toggleSwitch.checked = true;
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

});