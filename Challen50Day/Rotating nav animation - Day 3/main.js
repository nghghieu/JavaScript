const bar = document.querySelector(".fa-bars");
const time = document.querySelector(".fa-times");

bar.addEventListener("click", (e) => {
  document.querySelector(".box").style.transform = "rotate(-15deg)";
  document.querySelector(".circle").style.transform = "rotate(-90deg)";
  document.querySelector("nav").style.transform = "translateX(10px)";
});
time.addEventListener("click", (e) => {
  document.querySelector(".box").style.transform = "";
  document.querySelector(".circle").style.transform = "";
  document.querySelector("nav").style.transform = "translateX(-100px)";
});
