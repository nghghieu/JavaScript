let icons = document.querySelectorAll(".icon");
icons.forEach((icon) =>
  icon.addEventListener("click", (e) =>
    e.target.parentElement.parentElement.classList.toggle("active")
  )
);
