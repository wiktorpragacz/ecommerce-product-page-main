import { cartProductContainer } from "./cart.js";
import showPopup from "./alerts.js";

const addToCartBtn = document.querySelector(".add-to-cart-btn");
const deacrease = document.querySelector(".decrease-quantity");
const increase = document.querySelector(".increase-quantity");
let quantity = document.querySelector(".product-amount");

addToCartBtn.addEventListener("click", addToCart);
increase.addEventListener("click", increaseQuantity);
deacrease.addEventListener("click", decreaseQuantity);

function addToCart() {
  const PRODUCT_PRICE = 125;

  showPopup("add");
  cartProductContainer.innerHTML = `<div class="cart-product">
  <img src="./images/image-product-1.jpg" alt="pair of shoes">
  <div class="cart-product-details">
    <p>Fall Limited Edition Sneakers</p>
    <p>$125.00 x <span class="product-amount">${
      quantity.textContent
    }</span> <span class="total-price">$${
    quantity.textContent * PRODUCT_PRICE
  }</span> </p>
  </div>
  <img class="delete-btn" src="./images/icon-delete.svg" alt="trash delete button">
</div>
<div class="cart-checkout-section">
              <div class="checkout-btn"><p>Checkout</p></div>
            </div>`;
  const deleteProductBtn = document.querySelector(".delete-btn");
  deleteProductBtn.addEventListener("click", deleteProduct);
}

function deleteProduct() {
  showPopup("delete");
  cartProductContainer.innerHTML = "<p>Your cart is empty</p>";
}

function increaseQuantity() {
  quantity.textContent++;

  if (quantity.textContent >= 50) {
    quantity.textContent = 50;
  }
}

function decreaseQuantity() {
  quantity.textContent--;

  if (quantity.textContent <= 1) {
    quantity.textContent = 1;
  }
}
