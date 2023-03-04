<<<<<<< HEAD
export default showPopup;

function showPopup(action) {
  const alert = document.createElement("div");
  if (action === "delete") {
    alert.innerHTML = "<p>Product deleted</p>";
    alert.classList.add("delete-popup");
    document.body.append(alert);
    setTimeout(() => {
      alert.remove();
    }, 1500);
  } else if (action === "add") {
    alert.innerHTML = "<p>Product added to cart</p>";
    alert.classList.add("add-popup");
    document.body.append(alert);
    setTimeout(() => {
      alert.remove();
    }, 1500);
  }
}
=======
export default showPopup;

function showPopup(action) {
  const alert = document.createElement("div");
  if (action === "delete") {
    alert.innerHTML = "<p>Product deleted</p>";
    alert.classList.add("delete-popup");
    document.body.append(alert);
    setTimeout(() => {
      alert.remove();
    }, 1500);
  } else if (action === "add") {
    alert.innerHTML = "<p>Product added to cart</p>";
    alert.classList.add("add-popup");
    document.body.append(alert);
    setTimeout(() => {
      alert.remove();
    }, 1500);
  }
}
>>>>>>> 6bc287bf62889f865903eff8c73d09906535309b
