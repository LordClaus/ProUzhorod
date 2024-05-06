document.addEventListener("DOMContentLoaded", function () {
    const div = document.querySelector("div");
    div.classList.remove("scrolled");
    window.addEventListener("scroll", () => {
        const div = document.querySelector("div");
        const scrollPosition = window.scrollY;
        div.classList.remove("scrolled");
    });
    document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector('#contact');
        if (target) {
            const offset = target.getBoundingClientRect().top + window.scrollY - document.querySelector('nav').clientHeight;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Перевіряємо, чи зберіглась темна тема у localStorage
    const isDarkTheme = localStorage.getItem('theme') === 'dark-theme';

    // Якщо темна тема була активована на головній сторінці, застосуємо її на цій сторінці
    if (isDarkTheme) {
        document.body.classList.add('dark-theme');
    }
});