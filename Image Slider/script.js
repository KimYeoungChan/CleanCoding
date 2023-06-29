// 변수 선언
const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = document.querySelectorAll("img"),
  buttons = document.querySelectorAll(".button");

let imageIndex = 1,
  intervalId;

//자동 이미지 슬라이더를 시작하는 기능 선언0
const autoSlide = () => {
  // 2초마다 slideImage() 함수를 호출해서 슬라이드 쇼 호출
  intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};
// 페이지 로드 시 자동 슬라이드 기능 호출
autoSlide();

// 지정된 이미지를 표시하도록 보여주는 디스플레이를 업데이트하는 함수
const slideImage = () => {
  // 업데이트된 이미지 인덱스를 계산
  imageIndex =
    // imageIndex가 images의 갯수랑 같으면 0 출력
    // 아니면 imageIndex < 0일 경우 images.length - 1 출력
    // 다 아니면 imageIndex 출력
    imageIndex =
      imageIndex === images.length
        ? 0
        : imageIndex < 0
        ? images.length - 1
        : imageIndex;
  // 지정된 이미지를 표시하도록 보여주는 디스플레이를 업데이트 기능
  carousel.style.transform = `translate(-${imageIndex * 100}%)`; // carousel의 transform 스타일을 translate에 100%을 곱하고 -%를 추가를함
};

// 이전,다음 버튼을 누를 수 있도록 화면을 업데이트하는 함수
const updateClick = (e) => {
  // 슬라이드 자동 멈춤
  clearInterval(intervalId);
  // 클릭한 버튼으로 기준으로 이미지 인덱스 계산
  imageIndex += e.target.id === "next" ? 1 : -1; // e.target.id가 next이면 +1, 아니면 -1를 imageIndex 값에 더하기 할당으로 한다
  slideImage(imageIndex);
  // 자동슬라이드 리셋
  autoSlide();
};

// 네비게이션 버튼 이벤트 추가
buttons.forEach((button) => button.addEventListener("click", updateClick));

// 자동 슬라이딩을 중지하기 위해 전체 요소에 이벤트 수신기 위에 마우스 추가
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));

// 자동 슬라이딩을 다시 시작하기 위해 전체 요소에 moseleave 이벤트 수신기 추가
wrapper.addEventListener("mouseleave", autoSlide);
