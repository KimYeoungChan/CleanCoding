// 변수 선언
const captchaTextBox = document.querySelector(".captch_box input");
const refreshButton = document.querySelector(".refresh_button");
const captchaInputBox = document.querySelector(".captch_input input");
const message = document.querySelector('.message');
const submitButton = document.querySelector(".button");

// generate captcha를 저장할 변수
let captchaText = null;

// generate captcha 함수
const generateCapcha = () => {
    // 랜덤 숫자를 36진수로 문자열로 바꾸고 2번째부터 7번째까지 매개변수로 전달
    const randomString = Math.random().toString(36).substring(2, 7);
    const randomStringArray = randomString.split(""); // "" 문자로 분할을 한다.
    // 랜덤 숫자가 0.5보다 크면 char값을 대문자로 변경하고 아니면 char값 나옴0
    const changeString = randomStringArray.map(char => Math.random() > 0.5 ? char.toUpperCase() : char)
    captchaText = changeString.join("   "); // " "로 하나의 문자열로 만듬
    captchaTextBox.value = captchaText; // captchaText가 captchaTextBox의 값임
    console.log(captchaText);
};

// 새로고침 함수
const refreshBtnClick = () => {
    generateCapcha();
    refreshButton.value = "";
    capthaKeyUpVaildate();
};

// 키 데이터 함수
const capthaKeyUpVaildate = () => {
    // toggle submit 버튼 captcha 입력 필드를 기준으로 클래스 사용 안 함
    // disabled클래스와 captchaInputBox값의 역순이랑 바뀌어서 나옴
    submitButton.classList.toggle("disabled", !captchaInputBox.value);

    // captchaInputBox의 값이 빈 값이 이면 message의 active 클래스 제거
    if(captchaInputBox.value === "") message.classList.remove("active");
};

// 결과 버튼 함수
const submitBtnClick = () => {
    // captchaText 값을 ""로 분리하고 char 값이 값이 있는 경우면 문자열을 합쳐라
    captchaText= captchaText.split("").filter((char) => char !== " ").join("");

    message.classList.add("active"); // active 클래스 추가
    if(captchaInputBox.value === captchaText) { // captchaInputBox 값이 captchaText 이랑 형식이랑 값이 같으면
        message.textContent = "Entered capth is corrent" //  Entered capth is corrent 텍스트 나옴
        message.style.color = "#826afb" // 글씨 색상 #826afb" 으로 변경
    }else {
        message.textContent = "Entered capth is not corrent" //  Entered capth is not corrent 텍스트 나옴
        message.style.color = "#ff2525" // 글씨 색상 #ff2525" 으로 변경
    }
};

// 새로 고침 버튼, inputBox, 결과 값 이벤트 추가
refreshButton.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", capthaKeyUpVaildate);
submitButton.addEventListener("click", submitBtnClick)


// 함수 실행
generateCapcha();