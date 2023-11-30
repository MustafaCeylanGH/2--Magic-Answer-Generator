"use strict";

const btnEl = document.querySelector(".btn");
const beforeAnswerImgEl = document.querySelector(".before-answer-img");
const afterAnswerImgEl = document.querySelector(".after-answer");
const afterAnswerTextEl = document.querySelector(".after-answer-text");
const yearEl = document.querySelector(".year");
const answerList = [
  "Yes!",
  "No!",
  "Maybe!",
  "In Your Dream!",
  "I don't think so!",
  "I believe you!",
  "Of course!",
];

// BUTTON //

btnEl.addEventListener("click", function () {
  beforeAnswerImgEl.classList.remove("hidden");
  afterAnswerImgEl.classList.add("hidden");
  afterAnswerTextEl.classList.remove("visible");

  setTimeout(userQuestion, 100);
});

const userQuestion = function () {
  const question = prompt("ASK ME ANYTHING (ONLY YES/NO QUESTION!)");
  if (question === null) {
    alert("Please try again.");
    return;
  }
  beforeAnswerImgEl.classList.add("hidden");
  afterAnswerImgEl.classList.remove("hidden");
  // Random answer
  const randomNumber = Math.floor(Math.random() * answerList.length);
  afterAnswerTextEl.textContent = answerList[randomNumber];
  setTimeout(() => {
    afterAnswerTextEl.classList.add("visible");
  }, 100);
};

// Current Year
const date = new Date();
const currentYear = date.getFullYear();
yearEl.textContent = currentYear;
