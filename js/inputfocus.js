const input = document.querySelector(".input1");

/*화면이 로드되었을 때 자동적으로 인풋에 커서가 맞춰짐*/
window.addEventListener("load", () => {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
});
