// 변수 선언
const image = document.querySelector(".container"),
  heartIcon = document.querySelector(".heart");

// 더블 클릭하면 이미지에 이벤트 추가
image.addEventListener("dblclick", (e) => {
  // 더블 클릭 이벤트로 x,y 값을 계산
  let xValue = e.clientX - e.target.offsetLeft;
  let yValue = e.clientY - e.target.offsetTop;
  console.log(xValue, yValue);

  // 하트아이콘 x,y값으로 위치를 사용
  heartIcon.style.left = `${xValue}px`;
  heartIcon.style.top = `${yValue}px`;

  // heartIcon active 클래스 추가
  heartIcon.classList.add("active");

  // 1초마다 active 클래스 제거
  setTimeout(() => {
    heartIcon.classList.remove("active");
  }, 1000);
});
