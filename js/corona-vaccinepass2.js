const vaccinepassDetail = document.querySelector(".vaccinepassDetail");

/*클릭이벤트, 팝업창*/
vaccinepassDetail.addEventListener("click", () => {
  alert(`
    코로나19
    예방접종증명서의
    상세정보입니다

    백신 : COVID19
    백신제조사 : 화이자
    로트번호 : FH4763
    접종차수 : 2차
    접종일자 : 2021.10.27.
    접종국가 : 대한민국
    접종기관 : 성누가외과의원
    상태 : 인증완료
  `);
});
