document.body.style.width='100vw'
document.body.style.height='100vh'
let mouse = document.createElement("div");
document.body.append(mouse);
mouse.style.height = "30px";
mouse.style.width = "30px";
mouse.style.borderRadius = "15px";
mouse.style.backgroundColor = "#000";
mouse.style.position = "absolute";
mouse.style.transitionDuration='.2s'
document.body.addEventListener("mousemove", (e) => {
  mouse.style.left = `${e.offsetX + 10}px`;
  mouse.style.top = `${e.offsetY + 10}px`;
});

let mouse2 = document.createElement("div");
document.body.append(mouse2);
mouse2.style.height = "20px";
mouse2.style.width = "20px";
mouse2.style.borderRadius = "10px";
mouse2.style.backgroundColor = "blue";
mouse2.style.position = "absolute";
mouse2.style.transitionDuration = ".4s";
document.body.addEventListener("mousemove", (e) => {
  mouse2.style.left = `${e.offsetX + 20}px`;
  mouse2.style.top = `${e.offsetY + 20}px`;
});

let mouse3 = document.createElement("div");
document.body.append(mouse3);
mouse3.style.height = "10px";
mouse3.style.width = "10px";
mouse3.style.borderRadius = "5px";
mouse3.style.backgroundColor = "lightblue";
mouse3.style.position = "absolute";
mouse3.style.transitionDuration = ".6s";
document.body.addEventListener("mousemove", (e) => {
  mouse3.style.left = `${e.offsetX + 30}px`;
  mouse3.style.top = `${e.offsetY + 30}px`;
});