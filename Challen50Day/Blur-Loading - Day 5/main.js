const numb = document.querySelector(".countNumber");
const shadow = document.querySelector(".shadow");

let i = 0;
let blur = 0;
let opacity = 0;
let offInterval = setInterval(() => update(), 20);

const update = () => {
  i++;
  blur += 0.3;
  opacity += 0.01;
  if (i > 99) {
    clearInterval(offInterval);
  }
  numb.textContent = i + "%";
  if (blur < 20) {
    shadow.style.filter = `blur(calc(20px - ${blur}px))`;
  }
  if (opacity < 1) {
    numb.style.opacity = `calc(1 - ${opacity})`;
  }
  if (numb.textContent === "100%") {
    numb.style.opacity = `0`;
  }
};

// function update() {
//   i++;

//   if (i > 99) {
//     clearInterval(offInterval);
//   }

//   numb.innerText = `${i}%`;
//   numb.style.opacity = scale(i, 0, 100, 1, 0);
//   shadow.style.filter = `blur(${scale(i, 0, 100, 30, 0)}px)`;
// }

// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
// };
