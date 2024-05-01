const menu = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu__toogle-nav");

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('toogle-menu')
});