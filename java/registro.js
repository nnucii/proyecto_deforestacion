// Registro de demostración: valida el formulario pero NO guarda ninguna cuenta.
const formularioRegistro = document.getElementById("formRegistro");
const mensajeRegistro = document.getElementById("mensajeRegistro");

formularioRegistro.addEventListener("submit", (e) => {
  e.preventDefault();

  const clave = document.getElementById("clave").value;
  const clave2 = document.getElementById("clave2").value;

  if (clave !== clave2) {
    mensajeRegistro.className = "mensaje mal";
    mensajeRegistro.textContent = "Las contraseñas no coinciden.";
    return;
  }

  mensajeRegistro.className = "mensaje bien";
  mensajeRegistro.textContent = "Esta página es solo una demostración: todavía no se crea ninguna cuenta ni se guardan datos.";
  formularioRegistro.reset();
});
