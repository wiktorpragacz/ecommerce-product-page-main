<<<<<<< HEAD
export { cart };
export { cartProductContainer };

const cartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart");
const cartProductContainer = document.querySelector(".cart-products-container");

function showCart() {
  cart.classList.toggle("show-cart");
}

window.addEventListener("click", (e) => {
  if (e.target.matches(".shopping-cart-icon")) {
    showCart();
  }
  if (
    cart.classList.contains("show-cart") &&
    !e.target.matches(".shopping-cart-icon")
  ) {
    showCart();
  }
});
=======
export { cart };
export { cartProductContainer };

const cartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart");
const cartProductContainer = document.querySelector(".cart-products-container");

function showCart() {
  cart.classList.toggle("show-cart");
}

window.addEventListener("click", (e) => {
  if (e.target.matches(".shopping-cart-icon")) {
    showCart();
  }
  if (
    cart.classList.contains("show-cart") &&
    !e.target.matches(".shopping-cart-icon")
  ) {
    showCart();
  }
});
>>>>>>> 6bc287bf62889f865903eff8c73d09906535309b
