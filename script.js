"use strict";

//function to shortcut the querySelector for textContent
function messages(field, content) {
  document.querySelector(field).textContent = content;
}

//function for generating a random number between 1 and 20
function randomNumber() {
  return Math.trunc(Math.random() * 20 + 1);
}

let secretNumber = randomNumber();
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  //storing the input field into a varable
  let guess = Number(document.querySelector(".guess").value);

  //if the field is empry
  if (guess === 0) {
    messages(".message", "Please enter a number!!⛔");

    //if the field  matches our secret number
  } else if (guess === secretNumber) {
    messages(".message", "Correct!!🥳");
    messages(".number", secretNumber);
    messages(".score", score);

    if (highScore < score) {
      highScore = score;
      messages(".highscore", highScore);
    }

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }

  //if the field doesn't  matches our secret number
  if (score > 0 && guess !== secretNumber && guess != 0) {
    //checking if the score reaches its minimum which is zero
    messages(".message", guess > secretNumber ? "Too high 📈" : "Too low 📉");
    messages(".score", score);
    score--;
  }
  //If the score reaches its minimum which is zero
  else if (score === 0) {
    messages(".message", "You've lost, try again 😥");
    messages(".score", score);
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = randomNumber();

  messages(".score", score);
  messages(".message", "Start guessing...");
  messages(".number", "?");
  document.querySelector(".guess").value = null;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
