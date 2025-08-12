// آرایه محصولات
const products = [
  { name: "لپ تاپ", price: 2000, image: "images/laptop.jpg" },
  { name: "موبایل", price: 1000, image: "images/mobile.jpg" },
  { name: "هدفون", price: 500, image: "images/headphone.jfif" },
  { name: "تبلت", price: 800, image: "images/tablet.jpg" }
];

// گرفتن سبد خرید از LocalStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");

// آپدیت شمارش سبد خرید
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// نمایش محصولات
products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-image">
    <strong>${product.name}</strong>
    <p>قیمت: ${product.price} تومان</p>
    <button>افزودن به سبد خرید</button>
  `;
  div.querySelector("button").addEventListener("click", () => {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  });
  productList.appendChild(div);
});

// بارگذاری اولیه شمارش
updateCartCount();
