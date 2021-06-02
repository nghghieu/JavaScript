const btnAdd = document.querySelector("#btnAdd");
const btnRemoveAll = document.querySelector("#btnRemoveAll");
const btnRemove = document.querySelector("#btnRemove");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const addInputValue = document.querySelector("#add").value;

  const card = document.createElement("div");
  card.className = "show-item";
  card.innerHTML = `
        <p>${addInputValue}</p>
        <button class="btnRemove">Remove</button>`;
  document.querySelector(".show").appendChild(card);
  document.querySelector("#add").value = "";
  document.querySelector(".list").textContent = "List";
  btnRemoveAll.style.display = "inline-block";
});

// RemoveAll
btnRemoveAll.addEventListener("click", (e) => {
  document.querySelector(".show").innerHTML = "";
  document.querySelector(".list").textContent = "";
  e.target.style.display = "none";
});

// Remove
document.querySelector(".show").addEventListener("click", (e) => {
  if (e.target.classList.contains("btnRemove")) {
    const card = e.target.parentElement;
    card.remove();
  }
});
