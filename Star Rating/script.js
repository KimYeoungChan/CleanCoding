// 변수 입력 stars의 i 태그 선택
const stars = document.querySelectorAll(".stars i");

// forEach문 "starts" star와 index1 매개변수
stars.forEach((star, index1) => {
  // 매개변수 star의 "클릭" 이벤트추가
  star.addEventListener("click", () => {
    // stars의 forEach문 star,index2 매개 변수
    stars.forEach((star, index2) => {
    // index1가 index2보다 크거나 같으면 star의 active 클래스 추가하고, index1가 index2보다 작거나 같으면 star의 active 클래스 제거한다
    index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});