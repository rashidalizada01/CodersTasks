const newArrivals = [
  { title: "T-shirt with Tape Details", price: 120, img: "../images/t-shirt1.svg", rateimg: "../images/rat3.5.png" },
  { title: "Skinny Fit Jeans", price: 240, img: "../images/jeans.svg", rateimg: "../images/rat5.0.png" },
  { title: "Checkered Shirt", price: 180, img: "../images/shirt.svg", rateimg: "../images/rat4.5.png" },
  { title: "Sleeve Striped T-shirt", price: 130, img: "../images/t-shirt2.svg", rateimg: "../images/rat3.5.png" }
];
const topSelling = [
  { title: "Vertical Striped Shirt", price: 212, img: "../images/shirt2.svg", rateimg: "../images/rat5.0.png" },
  { title: "Courage Graphic T-shirt", price: 145, img: "../images/t-shirt3.svg", rateimg: "../images/rat4.5.png" },
  { title: "Loose Fit Bermuda Shorts", price: 80, img: "../images/short.svg", rateimg: "../images/rat4.5.png" },
  { title: "Faded Skinny Jeans", price: 210, img: "../images/jeans2.svg", rateimg: "../images/rat3.5.png" }
];
let cart = [];
let cartCount = document.getElementById("cart-count");
let cartItemsList = document.getElementById("cart-items");

function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${product.img}" alt="${product.title}" class="product-img">
        <p>${product.title}</p>
        <img src="${product.rateimg}" alt="rating" class="rateimg">
        <span class="price">$${product.price}</span>
        <button class="add-to-cart" data-name="${product.title}">Add to Cart</button>
      `;

    container.appendChild(card);
  });

}
renderProducts(newArrivals, "newArrivals");
renderProducts(topSelling, "topSelling");




document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    let productName = button.getAttribute("data-name");

    // Məhsul obyektini tap
    let product =
      newArrivals.find(p => p.title === productName) ||
      topSelling.find(p => p.title === productName);

    cart.push(productName);
    cartCount.textContent = cart.length;

    // Popup listinə şəkil və ad əlavə et
    let li = document.createElement("li");
    li.innerHTML = `
      <img src="${product.img}" alt="${product.title}" style="width:32px;height:32px;vertical-align:middle;margin-right:8px;">
      ${product.title}
    `;
    cartItemsList.appendChild(li);
  });
});














const closeBtn = document.querySelector('.close__logo');
const salesBar = document.querySelector('.sales');

closeBtn.addEventListener('click', function () {
  salesBar.classList.add('closed');
  setTimeout(() => {
    salesBar.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 600); // transition müddəti ilə eyni olmalıdır
});
