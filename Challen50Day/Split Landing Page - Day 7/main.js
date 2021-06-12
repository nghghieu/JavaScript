const ps5 = document.querySelector(".ps5");
const xbox = document.querySelector(".xbox");
const center = document.querySelector(".center");

ps5.addEventListener("mouseover", (e) => {
  ps5.style.width = "70%";
  xbox.style.width = "30%";
});
xbox.addEventListener("mouseover", (e) => {
  ps5.style.width = "30%";
  xbox.style.width = "70%";
});
