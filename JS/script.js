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

function addList2() {
  const menuName = document.getElementById("nama2");
  const menuPrice = document.getElementById("price2");
  const priceTotal = parseInt(document.getElementById("total2").value);

  for (let i = 0; i <= priceTotal; i++) {
    document.getElementById("subMenu").innerHTML = menuName.innerHTML + " x" + priceTotal;
    document.getElementById("subTotal").innerHTML = "Rp " + parseInt(menuPrice.innerHTML) * priceTotal;
    amount.innerHTML = "Rp " + parseInt(menuPrice.innerHTML) * priceTotal;
  }
  document.getElementById("struk-content").style.display = "block";
}

function addList3() {
  const menuName = document.getElementById("nama3");
  const menuPrice = document.getElementById("price3");
  const priceTotal = parseInt(document.getElementById("total3").value);

  for (let i = 0; i <= priceTotal; i++) {
    document.getElementById("subMenu").innerHTML = menuName.innerHTML + " x" + priceTotal;
    document.getElementById("subTotal").innerHTML = "Rp " + parseInt(menuPrice.innerHTML) * priceTotal;
    amount.innerHTML = "Rp " + parseInt(menuPrice.innerHTML) * priceTotal;
  }
  document.getElementById("struk-content").style.display = "block";
}
function addList4() {
  const menuName = document.getElementById("nama4");
  const menuPrice = document.getElementById("price4");
  const priceTotal = parseInt(document.getElementById("total4").value);

  for (let i = 0; i <= priceTotal; i++) {
    document.getElementById("subMenu").innerHTML = menuName.innerHTML + " x" + priceTotal;
    document.getElementById("subTotal").innerHTML = "Rp " + parseInt(menuPrice.innerHTML) * priceTotal;
    amount.innerHTML = "Rp " + parseInt(menuPrice.innerHTML) * priceTotal;
  }
  document.getElementById("struk-content").style.display = "block";
}

function addList5() {
  const menuName = document.getElementById("nama5");
  const menuPrice = document.getElementById("price5");
  const priceTotal = parseInt(document.getElementById("total5").value);

  for (let i = 0; i <= priceTotal; i++) {
    document.getElementById("subMenu").innerHTML = menuName.innerHTML + " x" + priceTotal;
    document.getElementById("subTotal").innerHTML = "Rp " + parseInt(menuPrice.innerHTML) * priceTotal;
    amount.innerHTML = "Rp " + parseInt(menuPrice.innerHTML) * priceTotal;
  }
  document.getElementById("struk-content").style.display = "block";
}

function addList6() {
  const menuName = document.getElementById("nama6");
  const menuPrice = document.getElementById("price6");
  const priceTotal = parseInt(document.getElementById("total6").value);

  for (let i = 0; i <= priceTotal; i++) {
    document.getElementById("subMenu").innerHTML = menuName.innerHTML + " x" + priceTotal;
    document.getElementById("subTotal").innerHTML = "Rp " + parseInt(menuPrice.innerHTML) * priceTotal;
    amount.innerHTML = "Rp " + parseInt(menuPrice.innerHTML) * priceTotal;
  }
  document.getElementById("struk-content").style.display = "block";
}

function addList7() {
  const menuName = document.getElementById("nama7");
  const menuPrice = document.getElementById("price7");
  const priceTotal = parseInt(document.getElementById("total7").value);

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
  document.getElementById("total2").value = "";
  document.getElementById("total3").value = "";
  document.getElementById("total4").value = "";
  document.getElementById("total5").value = "";
  document.getElementById("total6").value = "";
  document.getElementById("total7").value = "";
  document.getElementById("checklist-conten").style.display = "block";
  document.getElementById("order").style.display = "none";
}
