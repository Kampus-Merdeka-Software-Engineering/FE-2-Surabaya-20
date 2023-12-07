// responsif navbar
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

// active navbar
let nav = document.getElementById("navbar");
let btns = nav.getElementsByClassName("nav-link");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// get all data menus
const API_BASE_URL = "http://localhost:3000";

async function getAllmenus() {
  const menuContainer = document.getElementById("cart-container");
  try {
    const respon = await fetch(`${API_BASE_URL}/menus`);
    const menus = await respon.json();
    console.log(menus);

    const menuContent = menus.map((items) => {
      return `
      <div class="cart-item">
      <img src="${items.image}" alt="cartItem" />
      <div class="content">
        <h3 id="nama1">${items.name}</h3>
        <span class="price">Rp </span><span class="price" id="price1">${items.price}</span>
        <div class="input"><span>Total</span><input class="totalNumber" type="number" name="total" id="total1" /></div>
        <button class="btn-add" onclick="addList1()">add</button>
      </div>
    </div>
      `;
    });

    menuContainer.innerHTML = menuContent;
  } catch (error) {
    console.log(error);
  }
}
getAllmenus();

// order menu
const amount = document.getElementById("counts");

function addList1() {
  const menuName = document.getElementById("nama1");
  const menuPrice = document.getElementById("price1");
  const priceTotal = parseInt(document.getElementById("total1").value);

  for (let i = 0; i <= priceTotal; i++) {
    document.getElementById("subMenu").innerHTML = menuName.innerHTML + " x" + priceTotal;
    document.getElementById("subTotal").innerHTML = "Rp " + parseInt(menuPrice.innerHTML) * priceTotal;
    amount.innerHTML = "Rp " + parseInt(menuPrice.innerHTML) * priceTotal;
  }
  document.getElementById("struk-content").style.display = "block";
}

function clearList() {
  document.getElementById("subMenu").innerHTML = "";
  document.getElementById("subTotal").innerHTML = "";
  amount.innerHTML = "";
  document.getElementById("total1").value = "";
  document.getElementById("checklist-conten").style.display = "block";
  document.getElementById("order").style.display = "none";
}
