//변수
const cookieBox = document.querySelector(".wrapper");
const buttons = document.querySelectorAll(".button");

const executeCodes =  () => {
  //
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show"); // show 클래스 추가

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");
    
      // 버튼의 id가 acceptBtn인 함수
    if (button.id === "acceptBtn") {
      // 1달 / 60 = 1분 / 60 = 1시간 / 24 = 하루, 30 = 30일 
      document.cookie = "cookieBy = codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    })
  })
};

// 새로고침할 때마다 함수 실행
window.addEventListener("load", executeCodes);