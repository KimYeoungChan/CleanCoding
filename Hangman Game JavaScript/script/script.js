const hangmanIamge = document.querySelector(".hangman-box img")
const wordDisplay = document.querySelector('.word-display');
const guessesText = document.querySelector('.guesses-text b');
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector('.game-modal');
const playAgain = document.querySelector('.play-again');

let currentWord, currentLetters = [], wrongGuessCount = 0;
const maxGuesses = 6;

const resetGame = () => {
    currentLetters = [];
    wrongGuessCount = 0;
    hangmanIamge.src = `/images/hangman-${wrongGuessCount}.svg`
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show");
};

const getRandomWord = () => {
    // 랜덤 단어 데이터 불러오기
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    console.log(word);
    document.querySelector('.hint-text b').innerHTML = hint;
    resetGame();
};

const gameOver = (isVictory) => {
    setTimeout(() => {
        const modalText = isVictory ? "You found the word:" : `The current word was:`;
        gameModal.querySelector("img").src = `images/${isVictory ?  'victory' : 'lost'}.gif`
        gameModal.querySelector("h4").innerText = `${isVictory ?  'Congrats!' : 'Game over!'}`
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");
    }, 300);
}

const initGame = (button, clickedLetter) => {
    // 단어 체크
    if(currentWord.includes(clickedLetter)) {
        // 키보드 클릭하면 화면에 단어 표시
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                currentLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            };
        });
        // console.log(clickedLetter, "is exist on the word");
    } else {
        // console.log(clickedLetter, "is not exist on the word");
        // count 세기 및 오류 카운터 나오면 이미지 출력
        wrongGuessCount++;
        hangmanIamge.src = `/images/hangman-${wrongGuessCount}.svg`
    }
    // 오류 카운터 세기
    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`

    // 게임끝 활성화 및 비활성화
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(currentLetters.length === currentWord.length) return gameOver(true);
}   

// 키보드 생성
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();
playAgain.addEventListener("click", getRandomWord);