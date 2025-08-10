// آرایه محصولات با عکس
const products = [
  { name: "لپ تاپ", price: 2000, image:"image/laptop.jpg" },
  { name: "موبایل", price: 1000, image: "image/mobile.jpg" },
  { name: "هدفون", price: 500, image: "image/headphone.jfif" },
  { name: "تبلت", price: 800, image: "image/tablet.jpg" }
];

// آرایه سبد خرید
const cart = [];

// المان‌های DOM
const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.createElement("p");
cartTotal.id = "cart-total";
cartItems.after(cartTotal);

// تابع برای آپدیت سبد خرید
function updateCart() {
  cartItems.innerHTML = ""; // پاک کردن محتوای قبلی سبد
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">سبد خرید خالی است</p>';
  } else {
    cart.forEach(item => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        ${item.name} - ${item.price} تومان
      `;
      cartItems.appendChild(div);
    });
  }
  // آپدیت تعداد و جمع قیمت
  cartCount.textContent = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = `جمع کل: ${totalPrice} تومان`;
}

// نمایش محصولات
products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-image">
    <strong>${product.name}</strong><br>
    قیمت: ${product.price} تومان<br>
    <button>افزودن به سبد خرید</button>
  `;
  // رویداد کلیک برای تغییر رنگ کارت
  div.addEventListener("click", () => {
    div.classList.toggle("active");
  });
  // رویداد کلیک برای افزودن به سبد خرید
  div.querySelector("button").addEventListener("click", (e) => {
    e.stopPropagation();
    cart.push(product);
    updateCart();
  });
  productList.appendChild(div);
});

// آپدیت اولیه سبد خرید
updateCart();