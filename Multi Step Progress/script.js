// 변수 선언
const circles = document.querySelectorAll(".circle"),
  propressBar = document.querySelector(".indicator"),
  buttons = document.querySelectorAll("button");

// currentStep값 임의 지정
let currentStep = 1;

// 버튼 클릭 할 때마다 current 값이 업데이트 되는 함수
const updateSteps = (e) => {
  currentStep = e.target.id === "next" ? ++currentStep : --currentStep; // e 타겟의 id가 next 이면 currentStep증감연산 아니면 currentStep 감소연산

  // 모든 원을 순환하고 인덱스 및 현재 단계에 따라 "활성" 클래스를 추가/제거합니다
  circles.forEach((circle, index) => {
    circle.classList[`${index < currentStep ? "add" : "remove"}`]("active"); // index값이 currentStep보다 작으면 classList[add] 아니면 classList[remove] , active 클래스를
  });

  // 바의 스타일 조절
  propressBar.style.width = `${
    ((currentStep - 1) / (circles.length - 1)) * 100 // propressBar의 가로너비가 ((currentStep - 1) / (circles의 갯수 -1)) * 100%
  }%`;

  // 현재 단계가 마지막 단계인지 첫 번째 단계인지 확인하고 해당 버튼을 비활성화합니다
  if (currentStep === circles.length) {
    // currentStep가 circles.length랑 같으면
    buttons[1].disabled = true; // buttons의 2번째 disabled가 true이다
  } else if (currentStep === 1) {
    // currentStep가 1이면
    buttons[0].disabled = true; // buttons의 첫번째 disabled가 true이다
  } else {
    buttons.forEach((button) => (button.disabled = false)); // 나머지는 button.disabled가 활성화 하지 않음
  }
};

// 모든 버튼 이벤트 적용
buttons.forEach((button) => {
  button.addEventListener("click", updateSteps);
});
