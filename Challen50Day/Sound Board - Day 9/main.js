const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const button = document.createElement("button");

  button.classList.add("btn");
  button.innerText = sound;

  button.addEventListener("click", () => {
    stop();
    document.getElementById(sound).play();
  });

  document.querySelector(".btns").appendChild(button);
});

function stop() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
