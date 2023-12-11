// responsif navbar
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
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

const API_BASE_URL = "https://be-2-surabaya-20-production.up.railway.app";
const menuContainer = document.getElementById("cart-container");
const subMenuElement = document.getElementById("subMenu");
const subTotalElement = document.getElementById("subTotal");
const totalCountsElement = document.getElementById("counts");
const checklistContainer = document.getElementById("checklist-conten");

let totalOrderPrice = 0;

async function getAllmenus() {
  try {
    const response = await fetch(`${API_BASE_URL}/menus`);
    const menus = await response.json();
    console.log(menus);

    const menuContent = menus.map((item, index) => {
      return `
      <div class="cart-item">
        <img src="${item.image}" alt="cartItem" />
        <div class="content">
          <h3 id="nama${index}">${item.name}</h3>
          <span class="price">Rp </span><span class="price" id="price${index}">${item.price}</span>
          <div class="input"><span>Total</span><input class="totalNumber" type="number" name="total" id="total${index}" /></div>
          <button class="btn-add" onclick="addList(${index})">add</button>
        </div>
      </div>
      `;
    });

    menuContainer.innerHTML = menuContent.join("");
  } catch (error) {
    console.log(error);
  }
}

function addList(index) {
  const itemName = document.getElementById(`nama${index}`).innerText;
  const itemPrice = parseFloat(document.getElementById(`price${index}`).innerText);
  const itemTotal = parseFloat(document.getElementById(`total${index}`).value);

  console.log(`Item Name: ${itemName}`);
  console.log(`Item Price: ${itemPrice}`);
  console.log(`Item Total: ${itemTotal}`);

  const orderItemTotal = itemPrice * itemTotal;
  totalOrderPrice += orderItemTotal;

  // Menampilkan hasil pemesanan di elemen HTML
  const orderResult = `
    <div class="order-item">
      <span>${itemName}</span>
      <span>x ${itemTotal}</span>
      <span>Rp ${orderItemTotal.toFixed(0)}</span>
    </div>
  `;

  // Menambah hasil pemesanan ke dalam container
  subMenuElement.innerHTML += orderResult;

  // Menampilkan total harga pemesanan
  subTotalElement.innerText = `Rp ${totalOrderPrice.toFixed(0)}`;

  // Menampilkan total jumlah item
  totalCountsElement.innerText = `Rp ${totalOrderPrice.toFixed(2)}`;
}

getAllmenus();

function checkoutList() {
  document.getElementById("checklist-conten").style.display = "block";
}

async function bookTable() {
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var tanggal = document.getElementById("date").value;
  var waktu = document.getElementById("time").value;
  var total_person = document.getElementById("person").value;

  // Display values in receipt
  document.getElementById("book-name").textContent = name;
  document.getElementById("book-email").textContent = email;
  document.getElementById("book-date").textContent = tanggal;
  document.getElementById("book-time").textContent = waktu;
  document.getElementById("book-person").textContent = total_person;

  // Show receipt content
  document.getElementById("booking-success").style.display = "block";
  document.getElementById("receipt-content").style.display = "block";
  document.getElementById("btn-download").style.display = "block";

  try {
    await fetch(`${API_BASE_URL}/bookings`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, tanggal, waktu, total_person }),
    });
  } catch (error) {
    console.log(error);
  } finally {
    alert("Submit is Successfully, Thankyou");
    name.value = "";
    email.value = "";
    tanggal.value = "";
    waktu.value = "";
    total_person.value = "";
  }
}

// Tambahkan event listener pada tombol download
document.getElementById("downloadButton").addEventListener("click", downloadReceipt);

function downloadReceipt() {
  // Get the content of the receipt
  var receiptContent = document.getElementById("receipt-content");

  // Create a new html2pdf instance
  var pdf = new html2pdf(receiptContent);

  // Save the PDF with a specific name
  pdf;
}
