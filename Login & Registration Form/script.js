//변수
const container = document.querySelector(".container");
const pwShowHide = document.querySelectorAll(".showHidePw");
const pwFields = document.querySelectorAll(".password");
const signUp = document.querySelector(".signup-link");
const login = document.querySelector(".login-link");

    // show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                
                if(pwField.type ==="password"){ // pwField의 type이 password와 같다면 
                    pwField.type = "text";  // pwField의 type이 text이면

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye"); //icon의 class가 uil-eye-slash -> uil-eye로 바뀜
                    })
                }else{
                    pwField.type = "password"; // pwField의 type이 password이면

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash"); //icon의 class가 uil-eye -> uil-eye-slash로 바뀜
                    })
                }
            }) 
        })
    })

    // signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active"); // container에 active 클래스 추가
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active"); // container에 active 클래스 제거
    });
