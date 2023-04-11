"use-strict";
console.log("script.js is scripting...");
window.addEventListener("load", start);

const numberList = [];

function start() {
  showBars();
  customers();
  setInterval(getNumberOfCustomers, 1000);
}

function customers() {
  for (let i = 0; i < 40; i++) {
    let number = Math.floor(Math.random() * 32);
    numberList.push(number);
  }
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
