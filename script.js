let db;
const request = indexedDB.open("RiegoDB", 1);

request.onupgradeneeded = function (e) {
  db = e.target.result;
  db.createObjectStore("registros", { keyPath: "id", autoIncrement: true });
};

request.onsuccess = function (e) {
  db = e.target.result;
  mostrarRegistros();
};

request.onerror = function (e) {
  console.error("Error al abrir la base de datos", e);
};

const btnActivar = document.getElementById("activar");
const btnDetener = document.getElementById("detener");
const estado = document.getElementById("estado");
const lista = document.getElementById("lista-registros");
const mensajeNoRegistros = document.getElementById("mensaje-no-registros");
const duracionInput = document.getElementById("duracion");
const unidadTiempoSelect = document.getElementById("unidad-tiempo");
let temporizadorRiego;
let duracionProgramadaTexto = "";
let contadorRiego = 1; // Contador para el ID de riego
let riegoActivoId = null; // Variable para almacenar el ID del riego activo

// Elementos de la alerta de confirmación
const confirmacionModal = document.getElementById("confirmacion-detener");
const confirmarDetenerBtn = document.getElementById("confirmar-detener");
const cancelarDetenerBtn = document.getElementById("cancelar-detener");
const overlay = document.getElementById("overlay");

btnActivar.addEventListener("click", () => {
  const duracion = parseInt(duracionInput.value);
  const unidad = unidadTiempoSelect.value;
  let tiempoEnMilisegundos;

  switch (unidad) {
    case 's':
      tiempoEnMilisegundos = duracion * 1000;
      duracionProgramadaTexto = `${duracion} segundos`;
      break;
    case 'm':
      tiempoEnMilisegundos = duracion * 60 * 1000;
      duracionProgramadaTexto = `${duracion} minutos`;
      break;
    case 'h':
      tiempoEnMilisegundos = duracion * 60 * 60 * 1000;
      duracionProgramadaTexto = `${duracion} horas`;
      break;
    default:
      tiempoEnMilisegundos = duracion * 1000;
      duracionProgramadaTexto = `${duracion} segundos`;
  }

  const idRiegoActual = contadorRiego;
  riegoActivoId = idRiegoActual;
  const mensajeActivar = `Riego activado`;
  actualizarEstado("activado", `#${idRiegoActual} ${mensajeActivar}`);
  guardarRegistro(mensajeActivar, duracionProgramadaTexto, idRiegoActual);
  btnActivar.disabled = true;
  btnDetener.disabled = false;

  // Simular la detención del riego después del tiempo especificado
  temporizadorRiego = setTimeout(() => {
    const mensajeFinalizado = `Riego detenido`;
    actualizarEstado("detenido", `#${idRiegoActual} ${mensajeFinalizado}`);
    guardarRegistro(mensajeFinalizado, duracionProgramadaTexto, idRiegoActual, true); // Marcamos como finalizado
    btnDetener.disabled = true;
    btnActivar.disabled = false;
    mostrarRegistros();
  }, tiempoEnMilisegundos);

  mostrarRegistros();
  contadorRiego++; // Incrementamos el contador para el próximo riego
});

// Mostrar la alerta de confirmación al intentar detener
btnDetener.addEventListener("click", () => {
  confirmacionModal.classList.remove("oculto");
  overlay.classList.remove("oculto");
});

// Acción al confirmar la detención
confirmarDetenerBtn.addEventListener("click", () => {
  const idDetencion = riegoActivoId !== null ? riegoActivoId : contadorRiego - 1;
  const mensajeDetenido = `Riego detenido`;
  actualizarEstado("detenido", `#${idDetencion} ${mensajeDetenido}`);
  guardarRegistro(mensajeDetenido, duracionProgramadaTexto, idDetencion, true); // Marcamos como finalizado
  clearTimeout(temporizadorRiego); // Limpiar el temporizador si se detiene manualmente
  btnDetener.disabled = true;
  btnActivar.disabled = false;
  mostrarRegistros();
  riegoActivoId = null; // Resetear el ID del riego activo
  confirmacionModal.classList.add("oculto");
  overlay.classList.add("oculto");
});

// Acción al cancelar la detención
cancelarDetenerBtn.addEventListener("click", () => {
  confirmacionModal.classList.add("oculto");
  overlay.classList.add("oculto");
});

function actualizarEstado(clase, mensaje) {
  const span = document.createElement("span");
  span.className = clase;
  span.textContent = mensaje.includes("activado") ? "Activado" : "Detenido";
  estado.innerHTML = "Estado: ";
  estado.appendChild(span);
}

function guardarRegistro(evento, duracion = "", idRiego = 0, finalizado = false) {
  const fecha = new Date();
  const opciones = {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  };
  const fechaFormateada = fecha.toLocaleString('es-ES', opciones);
  const trans = db.transaction(["registros"], "readwrite");
  const store = trans.objectStore("registros");
  store.add({ fecha: fechaFormateada, evento, duracion, idRiego, finalizado });
  trans.oncomplete = () => mostrarRegistros();
}

function mostrarRegistros() {
  const trans = db.transaction(["registros"], "readonly");
  const store = trans.objectStore("registros");
  const request = store.getAll();

  request.onsuccess = () => {
    lista.innerHTML = "";
    const datos = request.result;
    if (datos.length === 0) {
      mensajeNoRegistros.classList.remove("oculto");
    } else {
      mensajeNoRegistros.classList.add("oculto");
      datos.reverse().forEach(reg => {
        const li = document.createElement("li");
        let textoRegistro = `#${reg.idRiego} ${reg.evento} – ${reg.fecha}`;
        if (reg.duracion) {
          textoRegistro += ` (Programado: ${reg.duracion})`;
        }
        li.textContent = textoRegistro;

        li.style.borderLeftColor = "transparent";
        if (reg.evento.includes("activado")) {
          li.style.borderLeftColor = "#28a745"; // Verde para activado
        } else if (reg.evento.includes("detenido")) {
          li.style.borderLeftColor = "#dc3545"; // Rojo para detenido (manual o finalizado)
        }

        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "🗑️";
        btnBorrar.classList.add("borrar-btn");
        btnBorrar.addEventListener("click", () => borrarRegistro(reg.id));

        li.appendChild(btnBorrar);
        lista.appendChild(li);
      });
    }
  };
}

function borrarRegistro(id) {
  const trans = db.transaction(["registros"], "readwrite");
  const store = trans.objectStore("registros");
  store.delete(id);
  trans.oncomplete = () => mostrarRegistros();
}