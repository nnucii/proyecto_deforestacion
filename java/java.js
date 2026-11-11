const boton = document.getElementById("botonMenu");

// Minimizar / expandir
boton.addEventListener("click", () => {
  document.body.classList.toggle("colapsada");

  // Recuerda el estado aunque recargues la página
  localStorage.setItem("colapsada", document.body.classList.contains("colapsada"));
});

// Al cargar la página, restaurar el estado guardado
if (localStorage.getItem("colapsada") === "true") {
  document.body.classList.add("colapsada");
}

// Marcar como activo el link donde se hace clic
const links = document.querySelectorAll(".sidebar li a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});