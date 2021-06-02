const values = [
  { id: "scissors", value: "✌️" },
  { id: "rock", value: "✊" },
  { id: "paper", value: "🖐" },
];

let i = 0;

function random() {
  let computerBox = document.querySelector(".computer-box");
  computerBox.textContent = values[i].value;
  computerBox.dataset.id = values[i].id;
  if (i === values.length - 1) {
    i = 0;
  } else {
    i++;
  }
}

let interval = setInterval(random, 100);

const compare = (user, computer) => {
  const indexUser = values.findIndex((item) => item.id === user);
  const indexComputer = values.findIndex((item) => item.id === computer);
  const check = indexUser - indexComputer;
  if ([1, -2].includes(check)) {
    return 1;
  } else if ([-1, 2].includes(check)) {
    return -1;
  } else {
    return 0;
  }
};

document.querySelectorAll(".user-box-item").forEach((item) =>
  item.addEventListener("click", (e) => {
    const computerValue = document.querySelector(".computer-box").dataset.id;
    const userValue = e.target.id;
    e.target.style.background = "yellow";
    clearInterval(interval);
    let result = compare(userValue, computerValue);
    if (result == 1) {
      html = `<h2> Bạn đã thắng </h2>`;
    } else if (result == -1) {
      html = `<h2> Bạn đã thua</h2>`;
    } else {
      html = `<h2> Bạn đã hòa</h2>`;
    }

    document.querySelectorAll(".user-box-item").forEach((item) => {
      item.style.pointerEvents = "none";
    });
    btn.style.display = "block";

    document.querySelector(".alert").innerHTML = html;
  })
);

// Play Again
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  interval = setInterval(random, 100);
  document.querySelector(".alert").innerHTML = "";

  btn.style.display = "none";
  document.querySelectorAll(".user-box-item").forEach((item) => {
    item.style.pointerEvents = "";
   item.style.background = "none";
  });
});
