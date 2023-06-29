// 변수 선언
const inputs = document.querySelectorAll("input"),
button = document.querySelector("button");

// 모든 input 반복 출력
inputs.forEach((input, index1) => { // 매개변수1 : input, 매개변수2 index1
  input.addEventListener("keyup", (e) => { //keyup이라는 키보드 이벤트
  // 현재 입력 요소를 현재 입력 변수에 저장합니다.
  // 현재 입력 요소의 다음 형제 요소 및 다음 입력 변수를 저장합니다.
  // 현재 입력 요소의 이전 형제 요소 및 prevInput 변수 저장
    const currentInput = input,
      nextInput = input.nextElementSibling,
      prevInput = input.previousElementSibling;

      // currentInput의 값의 갯수가 1보다 크면
      if(currentInput.value.length > 1){
        currentInput.value = ""; // 빈 값
        return;
      }
      
      if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "" ){ //nextInput 과 nextInput의 속성값 disabled 과 currentInput의 속성 값이 빈값이 아니면
        nextInput.removeAttribute("disabled"); // nextInput의 disabled 속성값을 지운다.
        nextInput.focus(); // nextInput 포커스를 한다.
      }
      
      if(e.key === "Backspace") { // e의 key 값이 Backspace와 완전 일치면
        inputs.forEach((input, index2) => { // 매개변수1 : input, 매개변수2 : index2
          if(index1 < index2 && prevInput){ // index1가 index2 보다 작거나 prevInput이면
            input.setAttribute("disabled", true); // input의 속성값 "disabled"을 true라고 한다.
            currentInput.value = ""; // currentInput의 값이 빈값
            prevInput.focus(); // prevInput 포커스 함
          }
        });
      }

      // input의 배열이 3번쨰가 아니면서 disabled 이거나 input의 배열이 3번째 값이 빈 공간이 아니면 
      if(!input[3].disabled && input[3].value !== "") {
        button.classList.add("active"); // button의 클래스 active 추가
        return; // 값을 변환한다
      }
      button.classList.remove("active"); // button의 클래스 active 제거
  });
});

// 화면 로드 시 inputs이 활성화 한다.
window.addEventListener("load", () => {
  inputs[0].focus();
});