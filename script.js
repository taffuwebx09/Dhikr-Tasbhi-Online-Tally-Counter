"use strict";

const numCunter = document.querySelector(".cunter");
const increaseBtn = document.querySelector(".btn-increase");
const decreaseBtn = document.querySelector(".btn-decrease");
const resetBtn = document.querySelector(".reset-Count");

// Strating =>

numCunter.textContent = 0;

let count = 0;

increaseBtn.addEventListener("click", () => {
  count++;

  numCunter.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  let cunter = Number(numCunter.textContent);
  if (cunter === 0) {
    numCunter.textContent = 0;
  } else {
    count--;

    numCunter.textContent = count;
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;

  numCunter.textContent = 0;
});
