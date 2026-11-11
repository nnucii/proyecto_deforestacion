// ===== Datos curiosos al azar =====
const datos = [
  "En 2022 se perdieron 4,1 millones de hectáreas de bosques primarios tropicales.",
  "Esa pérdida equivale a perder 11 campos de fútbol de bosque cada minuto.",
  "La pérdida forestal de 2022 produjo 2,7 gigatoneladas de CO2, parecido a las emisiones anuales de combustibles fósiles de la India.",
  "Un bosque degradado todavía existe, pero ya no funciona bien como ecosistema: puede ofrecer poco hábitat y poco alimento a los animales.",
  "La deforestación ocurre en todo tipo de bosques, pero sobre todo en las zonas tropicales.",
  "Dos de los principales motivos de la deforestación son convertir el suelo en tierra de cultivo y la tala masiva para obtener madera.",
  "Los bosques funcionan como sumideros naturales de CO2, producen oxígeno y protegen la biodiversidad.",
  "En 2024 los trópicos perdieron 6,7 millones de hectáreas de bosque primario, un récord según Global Forest Watch.",
  "En 2025 la pérdida de bosque primario tropical fue de 4,3 millones de hectáreas, un 36 % menos que en 2024.",
  "Los trópicos húmedos perdieron 87 millones de hectáreas de bosque primario desde comienzos de siglo."
];

const botonDato = document.getElementById("botonDato");
const textoDato = document.getElementById("dato");
let ultimoDato = -1;

if (botonDato && textoDato) {
  botonDato.addEventListener("click", () => {
    let i;
    // Evita mostrar el mismo dato dos veces seguidas
    do {
      i = Math.floor(Math.random() * datos.length);
    } while (i === ultimoDato);
    ultimoDato = i;
    textoDato.textContent = datos[i];
  });
}

// ===== Gráfica de estadísticas =====
const lienzo = document.getElementById("grafica");

if (lienzo) {
  if (typeof Chart !== "undefined") {
    new Chart(lienzo, {
      type: "bar",
      data: {
        labels: ["2022", "2023", "2024", "2025"],
        datasets: [{
          label: "Millones de hectáreas",
          data: [4.1, 3.7, 6.7, 4.3],
          backgroundColor: "rgb(122, 155, 101)",
          borderColor: "rgb(41, 51, 44)",
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: "Pérdida de bosque primario tropical",
            font: { size: 18 }
          }
        },
        scales: {
          y: { beginAtZero: true, title: { display: true, text: "Millones de hectáreas" } },
          x: { title: { display: true, text: "Año" } }
        }
      }
    });
  } else {
    lienzo.insertAdjacentText("afterend", "No se pudo cargar el gráfico. Revisá tu conexión a internet.");
  }
}
