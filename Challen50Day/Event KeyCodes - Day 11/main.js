window.addEventListener("keyup", (e) => {
  htmls = `  <div class="item">
  <p>${e.key}</p>
  <span>event.key</span>
</div>
<div class="item">
  <p>${e.keyCode}</p>
  <span>event.keyCode</span>
</div>
<div class="item">
  <p>${e.code}</p>
  <span>event.code</span>
</div> 
  `;
  document.querySelector(".press").style.display = "none";
  document.querySelector(".show").innerHTML = htmls;
});
