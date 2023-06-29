const celsisus = document.querySelector("#celsius"),
  fahrenheit = document.querySelector("#fehrenheit");

// 페이가 로드 될 때, 섭쒸 입력 필드에 focus가 됨
window.addEventListener("load", () => celsisus.focus());

// 섭씨 값이 변하면 화씨 값도 변한다.
celsisus.addEventListener("input", () => {
  fahrenheit.value = ((celsisus.value * 9) / 5 + 32).toFixed(2);
  // 섭씨 값이 비어있으면 화씨도 빈값으로 됨.
  if (!celsisus.value) fahrenheit.value = ""; // celsisus의 값이 거짓으면 fahrenheit값이 빈 값
});

// 화씨 값이 변하면 섭씨 값도 변한다.
fahrenheit.addEventListener("input", () => {
  celsisus.value = (((fahrenheit.value - 32) * 5) / 9).toFixed(2); //toFixed는 소수점 2자리 처리
  // 화씨 값이 비어있으면 섭씨도 빈값으로 됨.
  if (!fahrenheit.value) celsisus.value = ""; // fahrenheit값이 값이 거짓으면 celsisus이 빈 값
});
