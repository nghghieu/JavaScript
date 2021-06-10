const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const items = document.querySelectorAll(".item");
const progress = document.querySelector(".progress");
let current = 1;

btnNext.addEventListener("click", () => {
  current++;
  if (current > items.length) {
    current = items.length;
  }
  update();
});

btnPrev.addEventListener("click", () => {
  current--;
  if (current < 1) {
    current = 1;
  }
  update();
});
let update = () => {
  items.forEach((item, index) => {
    if (index < current) {
      item.classList.add("active");
      console.log(current, index);
    } else {
      item.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (items.length - 1)) * 100 + "%";
  if (current == 1) {
    btnPrev.style.backgroundColor = "#ccc";
  } else if (current == items.length) {
    btnNext.style.backgroundColor = "#ccc";
  } else {
    btnPrev.style.backgroundColor = "rgb(90, 122, 209)";
    btnNext.style.backgroundColor = "rgb(90, 122, 209)";
  }
};
