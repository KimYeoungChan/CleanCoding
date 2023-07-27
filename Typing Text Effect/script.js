const dynamicText = document.querySelector("h1 span");
const words = ["Love", "like Art", "the Future", "Everythig"];

let wordIndex = 0;
let charIndex = 1;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  // console.log(currentWord, currentChar);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add("stop-blinking")

  if(!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if(isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  };
};

typeEffect();