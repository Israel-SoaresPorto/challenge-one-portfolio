const menu = document.querySelector('nav');
const menuBtn = document.querySelector('.menu__toogle-nav');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('toogle');
    menuBtn.classList.toggle('toogle-btn')
});