const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const form = document.querySelector(".login-form");

/*TEXT1, TEXT2의 값이 다르면 이벤트가 처리되지 않음*/
form.addEventListener("submit", (e) => {
  const text1 = input1.value;
  const text2 = input2.value;
  if (text1 !== text2) {
    event.preventDefault();
  }
});
