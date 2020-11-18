"use strict";
// selecting player score and dice image
const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");
const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");
const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
let currentScore = 0;
// starting condition
console.log(diceEL);
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add("hidden");

// Rolling of dice
btnRoll.addEventListener("click", function () {
  // 1. generate a random number
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. display dice
  diceEL.classList.remove("hidden");
  diceEL.src = `dice-${dice}.png`;
  // 3. check for 1
  if (dice !== 1) {
    currentScore += dice;
    //TODO
    current0EL.textContent = currentScore;
  } else {
    // 4. if true switch to next player
  }
});
