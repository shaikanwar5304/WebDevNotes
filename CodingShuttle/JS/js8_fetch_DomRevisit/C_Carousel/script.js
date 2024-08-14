img = [];
dots = [];
n = 50;
dotsNav = document.getElementsByClassName("nav")[0];
dotsNav.style.gridTemplateColumns = `repeat(${n},1fr)`;
dotsNav.style.gap = `${10 / n + 1}%`;

carousel = document.getElementsByClassName("carouselimages")[0];

for (i = 0; i < n; i++) {
  img[i] = document.createElement("img");
  dots[i] = document.createElement("div");

  img[i].src = `https://dummyjson.com/image/1000x500/${Math.round(999999 * Math.random())}/ffffff?text=${i + 1}+image`;

  carousel.append(img[i]);
  dotsNav.append(dots[i]);

  dots[i].classList.add("dots");
  dots[i].addEventListener("click", (e) => {
    currentPos = dots.indexOf(e.target);
    updateView();
  });
}

prevPos = currentPos = 0;
leftbtn = document.getElementsByClassName("leftarr")[0];
rightbtn = document.getElementsByClassName("rightarr")[0];

if (n == 1) {
  rightbtn.style.display = "none";
}

rightbtn.addEventListener("click", (e) => {
  currentPos++;
  updateView();
});
leftbtn.addEventListener("click", (e) => {
  currentPos--;
  updateView();
});
function updateView() {
  if (currentPos > 0) leftbtn.style.display = "flex";
  else leftbtn.style.display = "none";
  if (currentPos < n - 1) rightbtn.style.display = "flex";
  else rightbtn.style.display = "none";

  carousel.style.transform = `translateX(${-currentPos * 100}%)`;
  dots[prevPos].classList.remove("active");
  dots[currentPos].classList.add("active");
  prevPos = currentPos;
}
updateView();
