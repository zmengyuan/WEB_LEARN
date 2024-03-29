'use strict';

/*
console.log(document.querySelector(".message").textContent);
document.querySelector('.message').textContent = '🎉Correct Number';

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

console.log('document.querySelector("guess").value');
document.querySelector(".guess").value = 23;*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    // when there is no input
    displayMessage('No number');
  } else if (guess === secretNumber) {
    // when player wins
    displayMessage('🎉Correct Number');

    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347"
    document.querySelector(".number").style.width = "30rem";

    // highScore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

  } else if (guess !== secretNumber) {
    // when guess is wrong
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too hign' : 'Too low');
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage('You lose the game');
      document.querySelector(".score").textContent = 0;

    }
  }

});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;
  displayMessage('Start guessing');
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = null;


  document.querySelector("body").style.backgroundColor = "#222"
  document.querySelector(".number").style.width = "15rem";



});