let product = [
    {name:"لپ تاپ",price:2000},
    {name:"موبایل",price:1000},
    {name:"هدفون",price:500},
    {name:"تبلت",price:800}

];
let productList= document.getElementById("product-list");
product.forEach(product=>{

let div = document.createElement("div")
div.className = "product";
div.innerHTML=`
<strong>${product.name}</strong><br>
قیمت: ${product.price} تومان<br>
<button>افزودن به سبد خرید</button>
`

productList.appendChild(div);
})