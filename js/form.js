console.clear();

document.addEventListener("DOMContentLoaded", function () {
  const main = document.querySelector(".new-card-form");
  main.classList.add("new-card-form");
  const form = document.querySelector('[data-js="form"]');
  const questionText = document.querySelector("#new-card__question");
  const answerText = document.querySelector("#new-card__answer");
  const charCountQuestion = document.querySelector("#charCountQuestion");
  const charCountAnswer = document.querySelector("#charCountAnswer");

  // Update character counter for question field
  questionText.addEventListener("input", () => {
    const maxLengthQuestion = parseInt(questionText.getAttribute("maxlength"));
    const charLeft = maxLengthQuestion - questionText.value.length;
    charCountQuestion.textContent = `${remainingChars} characters left`;
  });

  // Update character counter for answer field
  answerText.addEventListener("input", () => {
    const maxLengthAnswer = parseInt(answerText.getAttribute("maxlength"));
    const charLeft = maxLengthAnswer - answerText.value.length;
    charCountAnswer.textContent = `${remainingChars} characters left`;
  });

  // Events at form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get new question, answer and tags
    const newQuestion = questionText.value.trim();
    const newAnswer = answerText.value.trim();
    const newTags = document.querySelector("new-card").value.trim();

    // Split the string into an array of words using commas as the delimiter
    const tagsArray = newTags.split(",");

    // Now 'tagsArray' contains each word separated by commas
    console.log(tagsArray);

    // Create a new ul element for tags
    const tagsList = document.createElement("ul");
    tagsList.classList.add("new-card__tags");

    // Loop through the array and create li elements for each tag
    tagsArray.forEach(function (tag) {
      const trimmedTag = tag.trim(); // Trim to remove any leading or trailing spaces

      // Create a new li element for each tag
      const tagListItem = document.createElement("li");
      tagListItem.classList.add("new-tags");
      tagListItem.textContent = trimmedTag;

      // Append the li element to the ul
      tagsList.appendChild(tagListItem);
    });

    // Create a new card element
    const newCard = document.createElement("article");
    newCard.classList.add("new-card");
    newCard.innerHTML = `
        <button class="new-card__bookmark">
          <img
            id="bookmark-image"
            src="./img/bookmark.png"
            alt="Not bookmarked"
          />
        </button>
        <p class="new-card__question">${newQuestion}</p>
        <button class="new-card__button" alt="Shows answer">Show Answer</button>
        <h3 class="new-card__answer" hidden>${newAnswer}</h3>
      `;

    // Append the tags ul to the new card
    newCard.appendChild(tagsList);

    // Append the new card to the container
    main.appendChild(newCard);

    // Reset form fields
    form.reset();
  });
});

// Clear the input fields (optional)

// // Create a new card element
// const newCard = `
// <article class="new-card">
//     <button class="new-card__bookmark">
//       <img
//         id="bookmark-image"
//         src="./img/bookmark.png"
//         alt="Not bookmarked"
//       />
//     </button>
//     <p class="new-card__question">${newQuestion}</p>
//     <button class="new-card__button" alt="Shows answer">Show Answer</button>
//     <h3 class="new-card__answer" hidden>${newAnswer}</h3>
//     <ul class="new-card__tags">
//       <li class="new-tags">#friends</li>
//       <li class="new-tags">#cafe</li>
//       <li class="new-tags">#hangout</li>
//     </ul>
//   </article>`;

// Append to main
// form.insertAdjacentElement("afterend", card);

// function createCardElement(question, answer, tag) {
//   const card = document.createElement("section");
//   card.classList.add("question-card");

//   const questionElement = document.createElement("article");
//   questionElement.classList.add("question");
//   questionElement.innerHTML = `
//         <h3 class="question-text">${question}</h3>
//         <button class="answer-button" data-js="answer-button">Answer is:</button>
//         <p class="answer">${answer}</p>
//       `;

//   const tagsElement = document.createElement("div");
//   tagsElement.classList.add("hashtags-list");
//   tagsElement.innerHTML = `
//         <ul>
//           <li class="hashtags">#${tag}</li>
//         </ul>
//       `;

//   card.appendChild(questionElement);
//   card.appendChild(tagsElement);

//   return card;
// }

// function updateCharCount(textarea, charCountElement) {
//   const maxLength = parseInt(textarea.getAttribute("maxlength"));
//   const remainingChars = maxLength - textarea.value.length;
//   charCountElement.textContent = `Characters left: ${remainingChars}`;
// }

// const newCard = document.createElement("article");
// newCard.classList.add("new-card");

// const newBookmark = document.createElement("button");
// newBookmark.classList.add("new-card__bookmark");

// const newBookmarkImg = document.createElement("img");
// const imgSrc = "./img/bookmark.png";
// const imgAlt = "Not bookmarked";
// newBookmarkImg.src = imgSrc; // Set the src attribute
// newBookmarkImg.alt = imgAlt; // Set the alt attribute
// newBookmarkImg.id = "bookmark-image";

// const newCardQuestion = document.createElement("p");
// newCardQuestion.classList.add("new-card__question");

// const newCardButton = document.createElement("button");
// // newCardButton.alt = "Shows answer";
// newCardButton.classList.add("new-card__button");

// const newCardAnswer = document.createElement("h3");
// newCardAnswer.classList.add("new-card__answer");

// const newCardTagsList = document.createElement("ul");
// newCardTagsList.classList.add("new-card__tags");
