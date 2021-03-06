const explain = document.querySelector("#explain");

/*팝업창 띄움*/
explain.addEventListener("click", () => {
  alert(`
  * 괄호안의 숫자는 전일 대비 증가량 (UTC+9)
  * 치명률(%) = 총 사망자/총 확진자
  * 완치율(%) = 총 완치자/총 확진자
  * 치료중 = 총 확진자 - 총 사망자 - 총 완치자
  * 더이상 공개하지 않는 수치는 N/A로 표시
  백신 접종률은 2020년 12월 기준 주민등록인구 수 기준으로 계산됨
  * 얀센 백신의 경우 1회 접종만으로 접종이 완료되므로 1차 접종과 접종 완료 모두에 일괄 추가
  `);
});
