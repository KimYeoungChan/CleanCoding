const nav = document.querySelector(".nav"),
    searchIcon = document.querySelector("#searchIcon"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch"); // nav의 클래스 openSearch 추가,제거
  nav.classList.remove("openNav");
  // nav의 자손 클래스가 openSearch이면 searchIcon의 클래스는 uil-search -> uil-times으로 바꾼다
  if(nav.classList.contains("openSearch")) { 
    return searchIcon.classList.replace("uil-search","uil-times");
  }
  //searchIcon의 클래스는 uil-times -> uil-search으로 바꾼다
  searchIcon.classList.replace("uil-times","uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove ("openSearch");
  searchIcon.classList.replace("uil-times","uil-search");
});

navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});