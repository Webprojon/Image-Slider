import { products } from "./util.js";

// Selectors
const picture = document.querySelector("#picture");
const phoneName = document.querySelector(".details h2");
const phoneCost = document.querySelector(".details p");

const viewd = document.querySelector(".viewed span");
const purchesed = document.querySelector(".purchesed span");

let rightBtn = document.querySelector(".fa-chevron-right");
let leftBtn = document.querySelector(".fa-chevron-left");
// Selectors

// Events
window.addEventListener("DOMContentLoaded", () => {
  Rendering();
});

let currentItem = 0;

const Rendering = () => {
  let item = products[currentItem];
  picture.src = item.productImg;
  phoneName.textContent = item.productName;
  phoneCost.textContent = item.productCost;

  viewd.textContent = item.viewed;
  purchesed.textContent = item.purchesed;
};

rightBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > products.length - 1) {
    currentItem = 0;
  }
  setTimeout(() => {
    Rendering();
  }, 300);
});

leftBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = products.length - 1;
  }

  setTimeout(() => {
    Rendering();
  }, 300);
});
