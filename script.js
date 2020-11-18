"use strict";
// selecting player score and dice image
const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");
const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
// starting condition
console.log(diceEL);
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add("hidden");

// Rolling of dice
btnRoll.addEventListener("click", function () {
  // 1. generate a random number
  // 2. display dice
  // 3. check for 1
  // 4. if true switch to next player
});
