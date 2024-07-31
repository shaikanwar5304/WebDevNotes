let div = document.getElementsByTagName("div");
div[0].style.width = "100px";
div[0].style.height = "100px";
div[0].style.cursor = "pointer";
div[0].style.backgroundColor = "lightpink";
div[0].innerHTML = "this is div";
let h1 = document.createElement("h1");
document.body.appendChild(h1);
div[0].addEventListener("mousemove", (e) => {
  console.log(e)
  h1.innerText = `${e.offsetX},${e.offsetY}`;
});