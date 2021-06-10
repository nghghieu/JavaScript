document.querySelectorAll(".item").forEach((item) =>
  item.addEventListener("click", () => {
    removeActive();
    item.classList.add("active");
  })
);

let removeActive = () => {
  document.querySelectorAll(".item").forEach((item) => {
    item.classList.remove("active");
  });
};
