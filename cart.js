let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const clearCartBtn = document.getElementById("clear-cart");

function updateCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">سبد خرید خالی است</p>';
    cartTotal.textContent = "جمع کل: ۰ تومان";
    return;
  }

  let totalPrice = 0;
  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <span>${item.name} - ${item.price} تومان</span>
      <button class="remove-btn" data-index="${index}">حذف</button>
    `;
    div.querySelector(".remove-btn").addEventListener("click", () => {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCart();
    });
    cartItems.appendChild(div);
    totalPrice += item.price;
  });

  cartTotal.textContent = `جمع کل: ${totalPrice} تومان`;
}

clearCartBtn.addEventListener("click", () => {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
});

updateCart();
