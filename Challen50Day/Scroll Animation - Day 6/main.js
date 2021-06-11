const items = document.querySelectorAll(".item");
window.addEventListener("scroll", () => render());

const render = () => {
  const check = (window.innerHeight / 5) * 4;
  items.forEach((item) => {
    const top = item.getBoundingClientRect().top;
    if (top < check) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });
};
render();
