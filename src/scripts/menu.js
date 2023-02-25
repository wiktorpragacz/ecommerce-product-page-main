import { cart } from "./cart.js";

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".hidden-menu");
const bodyBlur = document.querySelector(".show-menu-blur");
const menuIcon = menuBtn.querySelector("img");

menuBtn.addEventListener("click", showMenu);

function showMenu() {
  setIcon();
  cart.classList.remove("show-cart");
  window.scrollTo(0, 0);
  menu.classList.toggle("show-menu");
  document.body.classList.toggle("show-menu-body");
  bodyBlur.classList.toggle("show");
}

function setIcon() {
  menu.classList.contains("show-menu")
    ? menuIcon.setAttribute("src", "./images/icon-menu.svg")
    : menuIcon.setAttribute("src", "./images/icon-close.svg");
}
