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

// create post booking form
// async function createCustomers() {

// }

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
    alert("Submit is Successfully, Thankyou");
  } catch (error) {
    console.log(error);
  }
}

function downloadReceipt() {
  // Get the content of the receipt
  var receiptContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Receipt</title>
        <style>
          /* Gaya disalin dari stylesheet pada bagian head */
          body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
          }

          .receipt {
            display: none;
            background-color: #fff;
            max-width: 900px;
            margin: 65px auto;
            padding: 20px;
            border: 1px solid #ddd;
            box-shadow: 2px 6px 6px 2px rgba(0, 0, 0, 0.9);
            border-radius: 5px;
          }
          
          h1 {
            text-align: center;
            color: #333;
            font-size: 2.5rem;
          }
          
          .sender-info {
            text-align: center;
            float: right;
            margin-bottom: 0.3rem;
            color: #333;
            font-size: 1rem;
          }
          
          .order-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          
          .order-table th,
          .order-table td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
            font-size: 1rem;
          }
          
          .order-table th {
            background-color: #f5f5f5;
          }
          
          .receipt .thankyou {
            text-align: center;
            margin-top: 1rem;
            font-size: 2rem;
          }
        </style>
      </head>
      <body>
        ${document.getElementById("receipt-content").outerHTML}
      </body>
    </html>
  `;

  // Create a Blob containing the HTML content
  var blob = new Blob([receiptContent], { type: "text/html" });

  // Create a link element
  var a = document.createElement("a");

  // Set the download attribute and create a download URL
  a.download = "receipt.html";
  a.href = window.URL.createObjectURL(blob);

  // Append the link to the document and trigger a click
  document.body.appendChild(a);
  a.click();

  // Remove the link from the document
  document.body.removeChild(a);
}
