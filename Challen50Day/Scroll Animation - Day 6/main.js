const colors = [
  "90e0ef",
  "ade8f4",
  "48cae4",
  "00b4d8",
  "0096c7",
  "0077b6",
  "023e8a",
  "03045e",
];

const items = document.querySelectorAll(".item");
window.addEventListener("scroll", () => render());

const render = () => {
  const randomColor = Math.floor(Math.random() * colors.length);
  const check = (window.innerHeight / 5) * 4;
  items.forEach((item) => {
    const top = item.getBoundingClientRect().top;
    if (top < check) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
    if (
      colors[randomColor] == "03045e" ||
      colors[randomColor] == "023e8a" ||
      colors[randomColor] == "0077b6"
    ) {
      item.style.color = "#fff";
    } else {
      item.style.color = "#000";
    }
    item.style.backgroundColor = `#${colors[randomColor]}`;
  });
};
render();
