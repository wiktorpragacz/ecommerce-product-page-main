export { cart };
export { cartProductContainer };

const cartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart");
const cartProductContainer = document.querySelector(".cart-products-container");

cartBtn.addEventListener("click", showCart);

function showCart() {
  cart.classList.toggle("show-cart");
}
