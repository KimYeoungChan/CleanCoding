// 변수 선언
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filteralbeCards = document.querySelectorAll(".filterable_cards .card");
// console.log(filterButtons, filteralbeCards);

const fiterCards = (e) => {
  // active라는 클래스를 가진 요소의 active 클래스 제거
  document.querySelector(".active").classList.remove("active");
  // e.target(buttons) 클래스 추가
  e.target.classList.add("active");
  // console.log(e.target);

  filteralbeCards.forEach((card) => {
    // 카드 요소 hide라는 클래스 추가
    card.classList.add("hide");
    // 카드가 선택한 필터와 일치하는지 또는 "모두"가 선택되었는지 확인합니다
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
    }
  });
};

// filterButtons의 클릭 이벤트 생성
filterButtons.forEach((button) => button.addEventListener("click", fiterCards));
