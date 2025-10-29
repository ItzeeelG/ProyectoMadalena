const button = document.querySelector(".botoniniciarsesion");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

button.addEventListener("click", () => {
  modal.style.display = "block";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar si se da clic fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
