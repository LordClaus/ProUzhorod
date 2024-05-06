document.addEventListener('DOMContentLoaded', function () {


    const toggleSwitch = document.getElementById("switch");

    const currentTheme = localStorage.getItem("theme");

    function updateLogoImage() {
        const logoImage = document.getElementById('logo-image');
        const isDarkTheme = document.body.classList.contains('dark-theme');

        if (isDarkTheme) {
            logoImage.src = '../Data/Images/24.png';
        } else {
            logoImage.src = '../Data/Images/25.png';
        }
    }

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        updateLogoImage();
    }
});