// 변수 선언
const startBtn = document.querySelector("#startBtn"),
  endBtn = document.querySelector("#endBtn"),
  prevNext = document.querySelectorAll(".prevNext"),
  numbers = document.querySelectorAll(".link");

// 초기 단계 설정
let currentStep = 0;

// 업데이트 함수
const updateBtn = () => {
  // currentStep이 4랑 같으면
  if (currentStep === 4) {
    // endBtn버튼이 disable속성 가짐
    endBtn.disabled = true;
    //  prevNext[1] disable속성 가짐
    prevNext[1].disabled = true;
  } else if (currentStep === 0) {
    // currentStep가 0이면
    startBtn.disabled = true; // startBtn disabled 속성 가짐
    prevNext[0].disabled = true; //  prevNext[0] disable속성 가짐
  } else {
    endBtn.disabled = false; // endBtn버튼이 disable속성 해제
    prevNext[1].disabled = false; // prevNext[1] disable속성 해제
    startBtn.disabled = false; // startBtn disable속성 해제
    prevNext[0].disabled = false; // prevNext[0] disable속성 해제
  }
};

// 숫자 클릭 이벤트 반복
numbers.forEach((number, numIndex) => {
  number.addEventListener("click", (e) => {
    e.preventDefault(); // e 중복방지해제
    // currentStep가 인덱스숫자만큼 증가됨
    currentStep = numIndex;
    // active 클래스 제거
    document.querySelector(".active").classList.remove("active");
    // 다음 숫자 active 클래스 추가
    number.classList.add("active");
    updateBtn(); // 업데이트 함수 실행
  });
});

// 이전, 다음 버튼 이벤트
prevNext.forEach((button) => {
  button.addEventListener("click", (e) => {
    // e.target.id의 값이 next이면 1을 더하고 next가 아니면 -1을 더한다(1을 뺀다.)
    currentStep += e.target.id == "next" ? 1 : -1;
    // numbers의 반복문 사용
    numbers.forEach((number, numIndex) => {
      // number "active" 클래스가 추가/제거, numIndex값이랑 currentStep일치한다.
      number.classList.toggle("active", numIndex === currentStep);
      updateBtn(); // 업데이트 함수 실행
    });
  });
});

// startBtn 이벤트
startBtn.addEventListener("click", () => {
  // active 클래스를 가진 요소 active 클래스 제거
  document.querySelector(".active").classList.remove("active");
  // numbers의 0번째 active 클래스 추가
  numbers[0].classList.add("active");
  currentStep = 0; // currentStep 값 0
  updateBtn(); // 업데이트 함수 실행
  endBtn.disabled = false; // endBtn버튼이 disable속성 해제
  prevNext[1].disabled = false; // prevNext[1] disable속성 해제
});

// endBtn 이벤트
endBtn.addEventListener("click", () => {
  // active 클래스를 가진 요소 active 클래스 제거
  document.querySelector(".active").classList.remove("active");
  // numbers의 0번째 active 클래스 추가
  numbers[4].classList.add("active");
  currentStep = 4; // currentStep 값 4
  updateBtn(); // 업데이트 함수 실행
  startBtn.disabled = false; // startBtn버튼이 disable속성 해제
  prevNext[0].disabled = false; // prevNext[0]가 disable속성 해제
});
