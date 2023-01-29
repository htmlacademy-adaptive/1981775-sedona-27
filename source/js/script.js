const header = document.querySelector('.header');
const nav = document.querySelector('.main-nav');
const menuButton = document.querySelector('.main-nav__button');

header.classList.remove('header--nojs');
nav.classList.remove('main-nav--nojs');
nav.classList.add('main-nav--closed');

menuButton.addEventListener('click', function () {
    nav.classList.toggle('main-nav--closed');
    nav.classList.toggle('main-nav--opened');
});
