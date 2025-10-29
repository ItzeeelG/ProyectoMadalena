const btn = document.getElementById("btnRegistrar");
const modal = document.getElementById("modal");
const close = document.getElementById("close");
const error = document.getElementById("error");

btn.addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const contraseña = document.getElementById("contraseña").value.trim();
  const fecha = document.getElementById("fechaNacimiento").value.trim();

  // Validación de campos vacíos
  if (nombre === "" || email === "" || contraseña === "" || fecha === "") {
    error.style.display = "block";
    return;
  }

  // Si pasa validación
  error.style.display = "none";
  modal.style.display = "block";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});
