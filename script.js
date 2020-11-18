"use strict";
// selecting the current player
const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");
// selecting player score and dice image

const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");
const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");
const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
// Score and player
const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;
// Refactoring switchPlayer logic
const switchPlayer = function () {
  // 4. if true switch to next player
  // currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  document.getElementById(
    `current--${activePlayer}`
  ).textContent = currentScore;
  //
  // Switch class
  player0EL.classList.toggle("player--active");
  player1EL.classList.toggle("player--active");
};
// starting condition
// console.log(diceEL);
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add("hidden");

// Rolling of dice
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. generate a random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);
    // 2. display dice
    diceEL.classList.remove("hidden");
    diceEL.src = `dice-${dice}.png`;
    // 3. check for 1
    if (dice !== 1) {
      currentScore += dice;
      // Start with player 1
      //TODO
      // current0EL.textContent = currentScore;
      // selecting dynamically current--0
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

// adding hold button functionality
btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player score
    scores[activePlayer] += currentScore;
    // console.log(scores[activePlayer]);
    // scores[1] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      // Toggle playing
      playing = false;
      // hide the dice
      diceEL.classList.add("hidden");
      // selecting the player
      // and removing the active class
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // switch player
      switchPlayer();
    }
  }
});
