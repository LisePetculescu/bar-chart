"use-strict";
console.log("script.js is scripting...");
window.addEventListener("load", start);

const numberList = [
  23, 25, 19, 3, 5, 15, 28, 19, 28, 29, 4, 1, 27, 24, 5, 13, 3, 18, 24, 10, 24,
  30, 19, 16, 13, 23, 27, 27, 9, 23, 6, 20, 9, 4, 23, 2, 0, 17, 30, 6,
];

function start() {
  showBars();
  setInterval(getNumberOfCustomers, 1000);
}

function getNumberOfCustomers() {
  let number = Math.floor(Math.random() * 32);
  console.log(number);
  newCustomers(number);
}

function showBars() {
  for (let i = 0; i < 40; i++) {
    document.querySelector("#bars").insertAdjacentHTML(
      "beforeend",
      /*HTML*/ `
    <div id="bar"></div>`
    );
  }
  heightOnBars();
}

function heightOnBars() {
  let bars = document.querySelectorAll("#bar");
  for (let i = 0; i < 40; i++) {
    bars[i].style.height = `${numberList[i]}px`;
  }
}

function newCustomers(number) {
  numberList.push(number);
  numberList.shift();

  numberList.forEach(heightOnBars);
}
