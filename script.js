"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "❤️‍🔥 CORRECT ANSWER!!";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".guessNumber").textContent = "13";
// document.querySelector(".score").textContent = "10";
// console.log((document.querySelector(".enterNumber").value = "20"));

const number = Math.trunc(Math.random() * 21);
console.log(number);

var score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".enterNumber").value;
  console.log(typeof guess, guess);
  if (!guess) {
    document.querySelector(".message").textContent = "💦 No Number!!!";
    score = score;
    document.querySelector(".score").textContent = score;
  } else if (score < 1) {
    document.querySelector(".message").textContent =
      "YOU LOST iss baat pe GUU KHALE!!";
  } else if (guess == number) {
    document.querySelector(".message").textContent =
      "CORRECT ANSWER BOOM BAM!!";
    document.querySelector(".guessNumber").textContent = "🙆🏿🙆🏿‍♂️🙆🏿‍♀️";
    document.querySelector(".highScore").textContent = score;
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
    document.querySelector("button").style.color = "white";
  } else if (guess > number + 5) {
    document.querySelector(".message").textContent = "TOO HIGH!!";
    score = score - 1;
    document.querySelector(".score").textContent = score;
  } else if (guess < number - 5) {
    document.querySelector(".message").textContent = "TOO LOW!!";
    score = score - 1;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "💩 GUU Khale";
    document.querySelector(".guessNumber").textContent = "🙅🏿🙅🏿‍♂️🙅🏿‍♀️";
    score = score - 1;
    document.querySelector(".score").textContent = score;
  }
  document.querySelector(".again").addEventListener("click", function () {
    document.querySelector(".message").textContent = "Start Guessing...";
    document.querySelector(".guessNumber").textContent = "?";
  });
});
