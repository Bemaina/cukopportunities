const btn = document.getElementById("joinBtn");
const img = document.getElementById("prankImg");

btn.addEventListener("click", () => {
  // Replace this with your creative image
  img.src = "creative.jpeg";
  img.style.display = "block";
  btn.textContent = "MORNING😂";
  btn.style.background = "#4CAF50";
  btn.style.color = "#fff";
});
