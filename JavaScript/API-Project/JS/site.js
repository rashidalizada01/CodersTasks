const container = document.getElementById("newArrivals");
const viewAllBtn = document.querySelector(".viewAllbtn .btn");
let products = [];
let currentProducts = [];
let showingAll = false;

// JSON-dan dataları yükləyirik
fetch("../data/products.json")
  .then(response => response.json())
  .then(data => {
    products = data;
    currentProducts = [...products];
    createFilter();
    renderProducts();
  });

function createFilter() {
  const filterDiv = document.createElement("div");
  filterDiv.style.textAlign = "center";
  filterDiv.style.marginBottom = "20px";

  const select = document.createElement("select");
  select.innerHTML = `
    <option value="">Choose Filter</option>
    <option value="cheap">Cheap to Expensive</option>
    <option value="expensive">Expensive to Cheap</option>
    <option value="shirt">Shirts</option>
    <option value="pant">Pants</option>
    <option value="sneaker">Sneakers</option>
`;


  select.addEventListener("change", () => {
    let filtered = [...products];

    switch (select.value) {
      case "cheap":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "expensive":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "shirt":
        filtered = filtered.filter(p => p.name.toLowerCase().includes("shirt"));
        break;
      case "pant":
        filtered = filtered.filter(p => p.name.toLowerCase().includes("pant"));
        break;
      case "sneaker":
        filtered = filtered.filter(p => p.name.toLowerCase().includes("sneaker"));
        break;
      case "short":
        filtered = filtered.filter(p => p.name.toLowerCase().includes("short"));
        break;
      default:
        break;
    }

    currentProducts = filtered;
    renderProducts();
  });


  filterDiv.appendChild(select);
  container.parentElement.insertBefore(filterDiv, container);
}

function renderProducts() {
  container.innerHTML = "";

  // Hər zaman 4 sütunlu grid olacaq
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(4, 1fr)";
  container.style.gap = "20px";

  const productsToShow = showingAll ? currentProducts.slice(0, 20) : currentProducts.slice(0, 8);

  productsToShow.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.background = "#ffffff";
    card.style.padding = "10px";
    card.style.borderRadius = "20px";
    card.style.textAlign = "center";

    card.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}" style="width:100%; border-radius:20px;">
            </div>
            <span>${product.name}</span>
            <p>${product.price} AZN</p>
            <img src="${product.rating}" alt="Rating" style="width:100px; display:block; margin:10px auto;">
            <button class="add-to-cart" style="margin-top:10px; background:black; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer;">
                Add to Cart
            </button>
            <button class="delete-btn" style="margin-top:5px; background:white; color:black; border:1 px solid gray; padding:5px 10px; border-radius:5px; cursor:pointer;">
                Delete
            </button>
        `;

    card.querySelector(".delete-btn").addEventListener("click", () => {
      currentProducts = currentProducts.filter(p => p.id !== product.id);
      renderProducts();
    });

    card.querySelector(".add-to-cart").addEventListener("click", () => {
      alert(`${product.name} səbətə əlavə olundu!`);
    });

    container.appendChild(card);
  });
}

viewAllBtn.addEventListener("click", () => {
  showingAll = !showingAll;
  viewAllBtn.querySelector("a").textContent = showingAll ? "Show Less" : "View All";
  renderProducts();
});
