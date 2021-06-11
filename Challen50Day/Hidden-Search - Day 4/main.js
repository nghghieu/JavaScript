const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
btn.addEventListener("click", (e) => {
  btn.classList.toggle("active");
  input.classList.toggle("active");
});
