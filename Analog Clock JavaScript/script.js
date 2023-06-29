// 변수명 선언
const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minuteHand = document.querySelector(".minute"),
    secondHand = document.querySelector(".second"),
    modeSwitch = document.querySelector(".mode-switch");

    if(localStorage.getItem("mode") === "Dark Mode") {
        body.classList.add("dark");
        modeSwitch.textContent = "Light Mode"
    }

    // modeSwitch의 이벤트 리스너 추가
    modeSwitch.addEventListener("click", () => {
        // dark 클래스 추가
        body.classList.toggle("dark");
        // dark라는 클래스 찾는 함수
        const isDarkMode = body.classList.contains("dark");
        // "dark라는" 클래스 존재 기반 텍스트
        modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
        localStorage.setItem("mode", isDarkMode ? "Dark Mdoe" : "Light Mode");
    });

    const updateTime = () => {
        // 현재 시간 가져오기 및 시계 바늘에 대한 각도 계산하기
        let date = new Date(),
        secToDeg = (date.getSeconds() / 60) * 360;
        minToDeg = (date.getMinutes() / 60) * 360;
        hrToDeg = (date.getHours() / 12) * 360;

        // 현재 시간을 기준으로 시계 바늘을 적절한 정도로 돌리기
        secondHand.style.transform = `rotate(${secToDeg}deg)`;
        minuteHand.style.transform = `rotate(${minToDeg}deg)`;
        hourHand.style.transform = `rotate(${hrToDeg}deg)`;
    };

// 업데이트하면서 시계 바늘을 설정하는 시간
setInterval(updateTime,1000);

updateTime();