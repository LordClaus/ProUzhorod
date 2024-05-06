document.addEventListener("DOMContentLoaded", function() {
    const div = document.querySelector("div");
    div.classList.remove("scrolled");
    window.addEventListener("scroll", () => {
        const div = document.querySelector("div");
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            div.classList.add("scrolled");
        } else {
            div.classList.remove("scrolled");
        }
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