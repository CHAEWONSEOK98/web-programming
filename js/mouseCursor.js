document.body.style.cursor = "none";

/*마우스 커서*/
let cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

/*마우스 커서를 따라오는 매체*/
let follow = document.createElement("div");
follow.classList.add("follow");
document.body.appendChild(follow);

/*화면에서의 마우스 위치값을 나타냄*/
function move(obj, event) {
  obj.style = "";
  obj.style.top = event.clientY + "px";
  obj.style.left = event.clientX + "px";
}

/*마우스 커서의 위치를 나타내고 focus효과를 만듬*/
if (cursor) {
  window.addEventListener("mousemove", function (event) {
    let e = event;
    let t = e.target;
    let f = follow;
    let c = cursor;

    if (t.tagName == "A") {
      c.style.backgroundColor = "transparent";

      f.style.top = t.offsetTop + "px";
      f.style.left = t.offsetLeft + "px";
      f.style.width = t.clientWidth + "px";
      f.style.height = t.clientHeight + "px";

      f.classList.add("on-focus");
    } else if (t.tagName == "AUDIO") {
      f.style.visibility = "hidden";
      c.style.backgroundColor = "transparent";
    } else {
      move(c, e);
      move(f, e);
      f.classList.remove("on-focus");
    }
  });
}
