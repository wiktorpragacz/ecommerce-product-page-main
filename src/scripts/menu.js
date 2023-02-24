import { cart } from "./cart.js";

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.hidden-menu');
const links = document.querySelectorAll('a');
const bodyBlur = document.querySelector('.show-menu-blur');

menuBtn.addEventListener('click', showMenu);

function showMenu() {
    cart.classList.remove('show-cart')
    window.scrollTo(0, 0)
    menu.classList.toggle('show-menu');
    document.body.classList.toggle('show-menu-body')
    bodyBlur.classList.toggle('show')
}


