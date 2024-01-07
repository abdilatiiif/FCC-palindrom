"use strict";

const checkBtn = document.getElementById("check-btn");
const inputField = document.getElementById("text-input");
const resultText = document.getElementById("result");

const words = [
  "_eye",
  "race car",
  "not a palindrome",
  "A man, a plan, a canal. Panama",
  "never odd or even",
  "nope",
  "almostomla is not a palindrome",
  "My age is 0, 0 si ega ym.",
  "1 eye for of 1 eye.",
  "0_0 (: /- :) 0-0",
  "five|_/|four",
];

checkBtn.addEventListener("click", () => {
  console.log("clicked");
  if (!inputField.value) {
    console.log("empty");
    alert("Please input a value");
  } else {
    console.log(inputField.value);
  }

  const cleanWord = checkWord(inputField.value);

  const reverseWord = cleanWord.split("").reverse().join("");
  console.log(reverseWord);

  if (cleanWord === reverseWord) {
    resultText.textContent = `${inputField.value} is a palindrome`;
  } else {
    resultText.textContent = `${inputField.value} is not a palindrome`;
  }

  switch (cleanWord === reverseWord) {
    case "_eye":
      resultText.textContent = `${cleanWord} is a palindrome`;

      break;

    case "race car":
      resultText.textContent = `${cleanWord} is a palindrome`;

      break;
    case "not a palindrome":
      resultText.textContent = `${cleanWord} is a palindrome`;

      break;
    case "A man, a plan, a canal. Panama":
      resultText.textContent = `${cleanWord} is a palindrome`;

      break;
    case "never odd or even":
      resultText.textContent = `${cleanWord} is a palindrome`;

      break;
    case "nope":
      resultText.textContent = `${cleanWord} is a palindrome`;

      break;
    case "almostomla is not a palindrome":
      resultText.textContent = `${cleanWord} is a palindrome`;

      break;
    case "My age is 0, 0 si ega ym.":
      resultText.textContent = `${cleanWord} is a palindrome`;

      break;
    case "1 eye for of 1 eye.":
      resultText.textContent = `${cleanWord} is a palindrome`;

      break;
    case "0_0 (: /- :) 0-0":
      resultText.textContent = `${cleanWord} is a palindrome`;

      break;
    case "five|_/|four":
      resultText.textContent = `${cleanWord} is a palindrome`;

      break;
  }
});

function checkWord(word) {
  // Replace non-alphanumeric characters and convert to lowercase
  return word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

//----------------------------------------------------------------
console.log(words);

for (let i = 0; i < words.length; i++) {
  const word = checkWord(words[i]);
  const isPalindrome = word === word.split("").reverse().join("");

  if (isPalindrome) {
    createResultText(word);
  } else {
    createResultText(`${word} is not a palindrome`);
  }
}

function createResultText(word) {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = `${word} is a palindrome`;
  resultText.appendChild(newParagraph);
}
