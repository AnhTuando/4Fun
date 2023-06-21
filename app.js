let noBtn = document.querySelector(".no");
let wrapElement = document.querySelector(".wrap");

noBtn.addEventListener("mouseover", function () {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  wrapElement.style.position = "absolute";
  wrapElement.style.top = Math.floor(Math.random() * (windowWidth / 4)) + "px";
  wrapElement.style.left = Math.floor(Math.random() * windowHeight) + "px";
  console.log(windowWidth, windowHeight);
});
