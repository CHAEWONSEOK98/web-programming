/*QR코드 타이머 설정*/
let vaccineTimer = document.querySelector(".vaccineTimer");
const TIME = 15;
let timer = undefined;

/*QR코드 이미지 설정*/
let qrImg = document.querySelector(".qrImg");
let files = [
  "imgs/qr1.PNG",
  "imgs/qr2.png",
  "imgs/qr3.jpg",
  "imgs/qr4.PNG",
  "imgs/qr5.PNG",
  "imgs/qr6.PNG",
];
let imgs = new Array();
for (var i = 0; i < files.length; i++) {
  imgs[i] = new Image(); //이미지 객체 생성
  imgs[i].src = files[i]; //이미지 미리 로딩
}
let next = 1;
function change(img) {
  qrImg.src = imgs[next].src; //이미지 변경
  next++; //다음 이미지 인덱스
  next %= imgs.length; //개수를 넘으면 처음으로
}

/*추가 제출 정보 체크박스 설정*/
let plusInfo = document.querySelector(".plusInfo");
let plusInfoDiv = document.querySelector(".plusInfoDiv");
let checkBoxInsert = document.querySelector(".checkBoxInsert");
let checkBoxRemove = document.querySelector(".checkBoxRemove");
let checkBoxName = document.querySelector(".checkBoxName");
let checkBoxBirth = document.querySelector(".checkBoxBirth");

/*윈도우 창이 로드 후 타이머 함수 호출*/
window.addEventListener("load", () => {
  Timer();
});

/*타이머 이벤트 처리*/
function Timer() {
  let remainTimer = TIME; //전역변수로 설정한 TIME값을 옮긴 변수
  updateTimerText(remainTimer); //시간을 나타냄
  timer = setInterval(() => {
    if (remainTimer <= 1) {
      clearInterval(timer); //타이머 값이 1초보다 작아지면 초기화 후 리셋
      Timer();
      change();
    }
    updateTimerText(--remainTimer); //1초마다 호출되며 값이 1초씩 줄어듬.
  }, 1000);
}

/*시간 업데이트 및 화면 출력*/
function updateTimerText(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  vaccineTimer.innerHTML = `${seconds}초`;
}

/*체크박스 추가, 삭제 클릭이벤트처리를 위한 전역변수*/
let newSpan1 = document.createElement("span");
newSpan1.setAttribute("class", "plusInfoSpan");

let newSpan2 = document.createElement("span");
newSpan2.setAttribute("class", "plusInfoSpan");

/*체크박스추가 클릭이벤트처리*/
checkBoxInsert.addEventListener("click", () => {
  let found = null;
  let koption = document.getElementsByName("option");
  for (var i = 0; i < koption.length; i++) {
    if (koption[0].checked == true) {
      //체크박스 체크된 것 확인
      found = koption[0]; //옵션값을 변수에 저장
      let newValue = found.value; //저장된 옵션의 벨류를 새로운 변수에 추가.

      newSpan1.innerText = newValue; //만들어진 span 태그에 작성
      plusInfoDiv.appendChild(newSpan1); // 입력받은 span 태그를 부모노드로 이동
    }
    if (koption[1].checked == true) {
      found = koption[i];
      let newValue = found.value;

      newSpan2.innerText = newValue;
      plusInfoDiv.appendChild(newSpan2);
    }
  }
});

/*체크박스삭제 클릭이벤트처리*/
checkBoxRemove.addEventListener("click", () => {
  // 기준을 정해 경우를 나눔
  if (checkBoxName.checked != true && checkBoxBirth.checked != true) {
    event.preventDefault();
  } else if (checkBoxName.checked === true && checkBoxBirth.checked === true) {
    plusInfoDiv.removeChild(newSpan1);
    plusInfoDiv.removeChild(newSpan2);
    checkBoxName.checked = checkBoxName.check;
    checkBoxBirth.checked = checkBoxBirth.check;
  } else if (checkBoxName.checked === true) {
    plusInfoDiv.removeChild(newSpan1);
    checkBoxName.checked = checkBoxName.check;
  } else if (checkBoxBirth.checked === true) {
    plusInfoDiv.removeChild(newSpan2);
    checkBoxBirth.checked = checkBoxBirth.check;
  }
});
