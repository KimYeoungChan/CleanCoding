// 변수 설정
const boxes = document.querySelectorAll(".box"),
  image = document.querySelector(".image");

// boxes의 반복문으로 돌림
boxes.forEach((box) => {
  // box요소를 드래그 하면서 마우스 대상 객체 위에 자리 잡고 있을 때, 이벤트 생성
  box.addEventListener("dragover", (e) => {
    e.preventDefault(); // e 클릭 방지
    box.classList.add("hovered");
  });

  // box 드래그가 끝나서 마우스가 대상 객체의 위에서 벗어 날 때, hovered 이벤트 삭제
  box.addEventListener("dragleave", () => {
    box.classList.remove("hovered");
  });

  // box객체를 드래그가 끝나서 드래그하던 객체를 놓았을 때, 이벤트 발생
  box.addEventListener("drop", () => {
    box.appendChild(image); // image 노드를 추가
    box.classList.remove("hovered"); // box hovered 클래스 제거
  });
});
