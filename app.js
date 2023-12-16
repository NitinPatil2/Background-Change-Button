let mainbody = document.querySelector(".main-body");
let btn = document.querySelector(".btn");
let colors = ["red", "yellow", "green", "voilet", "grey"];

btn.addEventListener("click", () => {
  let randomNo = parseInt(Math.random() * colors.length);
  console.log(randomNo);
  mainbody.style.backgroundColor = colors[randomNo];
});
