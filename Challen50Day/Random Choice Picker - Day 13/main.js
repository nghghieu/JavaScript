const input = document.querySelector("#input");
input.addEventListener("keyup", () => {
  if (input.value === "") {
    html = "";
  } else {
    html = ` <span>${input.value} </span>`;
  }
  document.querySelector(".render").innerHTML = html;
});
