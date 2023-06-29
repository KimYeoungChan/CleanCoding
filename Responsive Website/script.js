// Side Navigation JS Code
// 변수
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".navbar");
let body = document.querySelector("body");
let scrollBtn = document.querySelector(".scroll-btn")


// 메뉴버튼 함수
menuBtn.onclick = function(){
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  navBar.classList.add("active");
  body.style.overflow = "hidden"
}

// 닫기버튼 함수 
cancelBtn.onclick = function(){
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  navBar.classList.remove("active");
  body.style.overflow = "auto"
}

// Sticky Naviagation Menu Js Code
// nav 변수
let nav = document.querySelector("nav");
let val;

// 스크롤 내리면 배경 채워짐
// 스크롤 버튼 처음에는 없어지고 나중에 생김
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block"
  }else {
    nav.classList.remove("sticky");
    scrollBtn.style.display= "none"
  }
}

// Slide Navigation
// navLink 변수
let navLinks = document.querySelectorAll(".menu li a");

// 모바일화면 일 때, navLinks를 클릭을 할 때,
// 모바일 버튼 의 속성이랑 navbar 속성이 변함
for (var i = 0; i < navLinks.length; i++ ){
  navLinks[i].addEventListener("click", () => {
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navBar.classList.remove("active");
  });
} 