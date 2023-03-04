export { cart };
export { cartProductContainer };

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

