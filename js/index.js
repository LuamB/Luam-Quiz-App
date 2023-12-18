console.clear();

const buttonBookmark = document.querySelector('[data-js="button-bookmark"]');
// const buttonAnswer = document.querySelector('[data-js="button-answer"]');
// const answer = document.querySelector(".card__answer");
// answer.classList.add("hidden");

// Toogle bookmark button
let index = 0;
const bookmarkImg = document.getElementById("bookmark-image");
const images = ["./img/bookmark.png", "./img/bookmark_filled.png"];

buttonBookmark.addEventListener("click", () => {
  index = 1 - index; // Toggles between 0=filled and 1=not filled
  bookmarkImg.src = images[index];
});

// Toogle answer button
document.addEventListener("DOMContentLoaded", () => {
  const buttonAnswer = document.querySelector(".card__button");
  const answer = document.querySelector(".card__answer");

  // Toggle answer button
  buttonAnswer.addEventListener("click", () => {
    answer.hidden = !answer.hidden; // Toggle visibility of the answer
    buttonAnswer.textContent = answer.hidden ? "Show Answer" : "Hide Answer";
  });
});
