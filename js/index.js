let coronaEarth = document.querySelector(".coronaEarth");

/*마우스 커서 이벤트, 이미지 변화*/
coronaEarth.addEventListener("mouseenter", () => {
  coronaEarth.src = "imgs/earth.png";
});

coronaEarth.addEventListener("mouseleave", () => {
  coronaEarth.src = "imgs/corona19.png";
});
