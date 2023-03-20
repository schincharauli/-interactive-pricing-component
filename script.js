const pageViewers = document.querySelector(".views");
const outputPrice = document.querySelector("#valBox");
const rangeClass = document.querySelector(".rangeClass");
let toggle = document.querySelector(".toggle");

function toogleFun() {
  toggle.classList.toggle("active");
  mainFun();
}

document.getElementById("price-slider").oninput = function () {
  let value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #82CFD0 0%, #82CFD0 " +
    value +
    "%, #fff " +
    value +
    "%, white 100%)";
};

function mainFun() {
  if (toggle.classList.contains("active")) {
    discountedRange();
  } else {
    basicRange();
  }
}

function discountedRange() {
  let baseRange = rangeClass;
  let currentDiscountValue = parseFloat(baseRange.value);

  if (currentDiscountValue == 8) {
    pageViewers.innerHTML = "10K";
    outputPrice.innerHTML = "72";
  } else if (currentDiscountValue <= 12) {
    pageViewers.innerHTML = "50K";
    outputPrice.innerHTML = "108";
  } else if (currentDiscountValue <= 16) {
    pageViewers.innerHTML = "100K";
    outputPrice.innerHTML = "144";
  } else if (currentDiscountValue <= 24) {
    pageViewers.innerHTML = "500K";
    outputPrice.innerHTML = "216";
  } else {
    pageViewers.innerHTML = "1M";
    outputPrice.innerHTML = "324";
  }
}

function basicRange() {
  let inputRange = document.querySelector(".rangeClass");
  let currentVal = parseFloat(inputRange.value);

  if (currentVal == 8) {
    pageViewers.innerHTML = "10K";
    outputPrice.innerHTML = "8";
  } else if (currentVal <= 12) {
    pageViewers.innerHTML = "50K";
    outputPrice.innerHTML = "12";
  } else if (currentVal <= 16) {
    pageViewers.innerHTML = "100K";
    outputPrice.innerHTML = "16";
  } else if (currentVal <= 24) {
    pageViewers.innerHTML = "500K";
    outputPrice.innerHTML = "24";
  } else {
    pageViewers.innerHTML = "1M";
    outputPrice.innerHTML = "36";
  }
}
