'use strict';
// 변수 선언
const inputField = document.querySelector(".input-field textarea"),
  todoLists = document.querySelector(".todoLists"),
  pendingNum = document.querySelector(".pending-num"),
  clearButton = document.querySelector(".clear-button");

  // 작업 추가, 삭제 및 해제하는 동안 함수 실행
  function allTasks() {
    let tasks = document.querySelectorAll(".pending");

    //pendingNum 내용이 tasks의 갯수가 0이면 no로 하고 아니면 tasks의 갯수로 표현함
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

    let allLists = document.querySelectorAll(".list");
    if (allLists.length > 0) {
      todoLists.style.marginTop = "20px"; // tolists의marginTop 스타일
      clearButton.style.pointerEvents = "auto";
      return;
    }
    todoLists.style.marginTop = "0px";
    clearButton.style.pointerEvents = "none";
  }

  // input안에 값을 입력하고 Enter키를 누르면 작업 실행 
  inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim(); //trim은 앞,뒤 공백을 지오는 메소드

  // Enter 키를 했을 경우, input값이 0보다 클 경우 실행
  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = ` <li class="list pending" onclick="handleStatus(this)">
          <input type="checkbox" />
          <span class="task">${inputVal}</span>
          <i class="uil uil-trash" onclick="deleteTask(this)"></i>
        </li>`;

    todoLists.insertAdjacentHTML("beforeend", liTag); // todolist div 태그 삽입
    inputField.value = ""; //input 값 제거
    allTasks();
  }
});

  // task를 클릭하는 동안 체크박스 선택, 선택 해제
  function handleStatus(e) {
    const checkbox = e.querySelector("input"); // 체크박스 선언
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
  }

  // 삭제 아이콘을 클릭을 하면 삭제 함수
  function deleteTask(e) {
    e.parentElement.remove(); // 부모 요소 제거
    allTasks();
  }

  // 버튼 클릭하면 모든 리스트 삭제
  clearButton.addEventListener("click", () => {
    todoLists.innerHTML = "";
    allTasks();
  });
  