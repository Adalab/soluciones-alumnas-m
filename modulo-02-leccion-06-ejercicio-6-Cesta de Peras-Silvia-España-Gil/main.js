"use strict";

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const reset = document.querySelector(".reset");
const totalPears = document.querySelector(".totalPears");
const basket = {};
basket.max = 10;
basket.min = 0;
basket.actual = 0;
basket.initial = 1;

basket.addPear = function (a) {
  if (basket.actual < basket.max) {
    basket.actual += 1;
  }
  totalPears.innerHTML = basket.actual;
};
basket.restPear = function (a) {
  if (basket.actual > basket.min) {
    basket.actual -= 1;
  }

  totalPears.innerHTML = basket.actual;
};
basket.resetPear = function (a) {
  a = basket.initial;

  totalPears.innerHTML = a;
};
plus.addEventListener("click", basket.addPear);
minus.addEventListener("click", basket.restPear);
reset.addEventListener("click", basket.resetPear);
