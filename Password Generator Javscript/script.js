const passwordInput = document.querySelector(".password-box input"),
copyIcon = document.querySelector(".password-box .copy-icon"),
rangeInput = document.querySelector(".range-box input"),
sliderNumber = document.querySelector(".range-box .slider-number"),
generateButton = document.querySelector(".generate-button");

// 알파벳 문자(a-z/A-Z), 숫자(0-9) 및 기호($%&[]...)
let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~";

// 함수 호출
// 페이지 로드, 버튼 클릭과 rangeinput 슬라이드 표시
const generatePssword = () => {
  let newPassword = ""; // newPassword는 변할수 있는 변수라서 let, 빈값

  // for 함수로 rangeInput 값 실행
  for(let i = 0; i < rangeInput.value; i++) { //i는 rangeInput값보다 작을때까지 증가함수로
    let randomNumbers = Math.floor(Math.random() * allCharacters.length); // randomNumbers는 랜덤함수인데 allCharacters의 갯수를 곱한다.
    newPassword += allCharacters[randomNumbers]; // newPassword는 allCharacters의 랜덤숫자로 지정
  }
  passwordInput.value = newPassword; //newPassword는 passwordInput의 값
  copyIcon.classList.replace("uil-file-check-alt","uil-copy") //replace 메소드는 클래스명 교체
  // copyIcon의 클래스가 uil-file-check-alt -> uil-copy로 바뀜
};

rangeInput.addEventListener("input", () => {
  sliderNumber.innerHTML = rangeInput.value; //sliderNumber의 HTMl은 rangeInput의 값이다.
  generatePssword(); // generatePssword 실행
});

copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value);
  copyIcon.classList.replace("uil-copy","uil-file-check-alt") //replace 메소드는 클래스명 교체
  // copyIcon의 클래스가 uil-copy-> uil-file-check-alt로 바뀜
});

generatePssword();
generateButton.addEventListener("click", generatePssword); //generateButton 클릭하면 generatePssword함수 실행
