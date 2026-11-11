// Cada pregunta tiene la respuesta correcta y las incorrectas.
// Las opciones se mezclan solas cada vez que se abre la página.
const preguntas = [
  {
    texto: "¿Qué es la deforestación?",
    correcta: "Cortar o talar bosques que cubren una gran superficie y no replantarlos",
    incorrectas: [
      "El crecimiento natural de un bosque después de un incendio",
      "La plantación de árboles en las ciudades",
      "El cambio de color de las hojas en otoño"
    ],
    explicacion: "La página la define como cortar o talar árboles y bosques de gran superficie sin replantarlos."
  },
  {
    texto: "¿Dónde ocurre principalmente la deforestación?",
    correcta: "En zonas tropicales",
    incorrectas: ["En zonas polares", "En los desiertos", "Solo en las ciudades"],
    explicacion: "Ocurre en todo tipo de bosques, pero sobre todo en zonas tropicales."
  },
  {
    texto: "¿Cuántas hectáreas de bosques primarios tropicales se perdieron en 2022?",
    correcta: "Unos 4,1 millones",
    incorrectas: ["Unas 41 mil", "Unos 410 millones", "Unas 500 mil"],
    explicacion: "En 2022 se perdieron 4,1 millones de hectáreas."
  },
  {
    texto: "Esa pérdida de 2022 equivale a perder...",
    correcta: "11 campos de fútbol de bosque cada minuto",
    incorrectas: [
      "11 campos de fútbol de bosque por año",
      "1 campo de fútbol de bosque por hora",
      "110 campos de fútbol de bosque por mes"
    ],
    explicacion: "La página la compara con 11 campos de fútbol por minuto."
  },
  {
    texto: "Las 2,7 gigatoneladas de CO2 de esa pérdida forestal equivalen a las emisiones anuales de combustibles fósiles de...",
    correcta: "La India",
    incorrectas: ["Argentina", "Alemania", "Brasil"],
    explicacion: "La página las compara con las emisiones anuales de combustibles fósiles de la India."
  },
  {
    texto: "¿Qué es la degradación forestal?",
    correcta: "Cuando un bosque todavía existe, pero ya no funciona como un ecosistema saludable",
    incorrectas: [
      "Cuando un bosque desaparece por completo",
      "Cuando se planta un bosque nuevo",
      "Cuando un bosque crece más rápido de lo normal"
    ],
    explicacion: "Un bosque degradado sigue en pie, pero ya no ofrece suficiente hábitat ni alimento de calidad."
  },
  {
    texto: "¿Cuáles de estos tipos de bosque se mencionan en la página?",
    correcta: "Tropicales, templados y boreales",
    incorrectas: ["Desérticos y polares", "Marinos y urbanos", "Solo tropicales"],
    explicacion: "La página nombra los bosques tropicales, templados y boreales, además de las plantaciones."
  },
  {
    texto: "¿Cuáles son los principales motivos de la deforestación?",
    correcta: "Cambiar el uso del suelo para cultivar y talar mucha madera",
    incorrectas: ["Las lluvias intensas", "Las erupciones volcánicas", "La falta de viento"],
    explicacion: "También influyen el desarrollo industrial intenso y el crecimiento demográfico."
  },
  {
    texto: "¿Qué efecto tiene la deforestación sobre el clima?",
    correcta: "Reduce la capacidad de los ecosistemas de absorber dióxido de carbono (CO2)",
    incorrectas: [
      "Enfría el planeta",
      "No tiene ninguna relación con el clima",
      "Aumenta la cantidad de bosques"
    ],
    explicacion: "Al perder bosques, hay menos árboles que absorban CO2."
  },
  {
    texto: "¿Por qué son importantes los bosques?",
    correcta: "Absorben CO2, producen oxígeno y protegen la biodiversidad",
    incorrectas: [
      "Solo sirven para dar sombra",
      "Aumentan el CO2 del aire",
      "No cumplen ninguna función en el planeta"
    ],
    explicacion: "Son sumideros naturales de CO2, producen oxígeno y son santuarios de biodiversidad."
  },
  {
    texto: "Según la gráfica de la página, ¿en qué año (de 2022 a 2025) fue mayor la pérdida de bosque primario tropical?",
    correcta: "2024",
    incorrectas: ["2022", "2023", "2025"],
    ordenFijo: true,
    explicacion: "En 2024 fueron 6,7 millones de hectáreas, un récord según Global Forest Watch."
  }
];

function mezclar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

const formulario = document.getElementById("cuestionario");
const contenedor = document.getElementById("preguntas");
const resultado = document.getElementById("resultado");

// Dibuja las preguntas en pantalla
preguntas.forEach((p, i) => {
  const fieldset = document.createElement("fieldset");
  fieldset.id = "pregunta" + i;

  const leyenda = document.createElement("legend");
  leyenda.textContent = (i + 1) + ". " + p.texto;
  fieldset.appendChild(leyenda);

  const todas = [p.correcta, ...p.incorrectas];
  const opciones = p.ordenFijo ? todas.sort() : mezclar(todas);

  opciones.forEach(texto => {
    const etiqueta = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "p" + i;
    radio.value = texto;
    etiqueta.appendChild(radio);
    etiqueta.append(" " + texto);
    fieldset.appendChild(etiqueta);
  });

  const comentario = document.createElement("p");
  comentario.className = "feedback";
  comentario.id = "feedback" + i;
  fieldset.appendChild(comentario);

  contenedor.appendChild(fieldset);
});

// Corrige al enviar
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let puntos = 0;

  preguntas.forEach((p, i) => {
    const marcada = formulario.querySelector('input[name="p' + i + '"]:checked');
    const comentario = document.getElementById("feedback" + i);

    if (marcada && marcada.value === p.correcta) {
      puntos++;
      comentario.className = "feedback bien";
      comentario.textContent = "¡Correcto! " + p.explicacion;
    } else {
      comentario.className = "feedback mal";
      const inicio = marcada ? "No es esa. " : "Sin responder. ";
      comentario.textContent = inicio + "La respuesta correcta es: " + p.correcta + ". " + p.explicacion;
    }
  });

  resultado.textContent = "Resultado: " + puntos + " de " + preguntas.length + " respuestas correctas. " +
    "Las preguntas abiertas no se corrigen solas: compará tus respuestas con el texto de la página.";
  resultado.scrollIntoView({ behavior: "smooth", block: "center" });
});

// Al borrar todo, también se limpian los comentarios
formulario.addEventListener("reset", () => {
  resultado.textContent = "";
  document.querySelectorAll(".feedback").forEach(c => {
    c.textContent = "";
    c.className = "feedback";
  });
});
