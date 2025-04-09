// Importamos recetas desde un archivo externo simulado
import { getRecipes } from "./services/recipes.js";

// Verificamos que los datos recibidos sean un arreglo
const recetas = Array.isArray(getRecipes()) ? getRecipes() : [];

// Referencias a elementos del DOM
const input = document.getElementById("ingredient-input");
const recipesContainer = document.getElementById("recipes");
const sortSelect = document.getElementById("sort");
const suggestionBtn = document.getElementById("suggestion-btn");

// Variables globales para autocompletado y análisis
let currentSuggestionIndex = -1;
let currentSuggestions = [];
let historialIngredientes = [];


// =============================================
// FUNCIÓN: Mostrar recetas en pantalla
// =============================================
function renderRecetas(lista) {
    recipesContainer.innerHTML = ""; // Limpiamos el contenedor

    lista.forEach((receta) => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
        <img src="${receta.imagen}" alt="${receta.nombre}" />
        <h3>${receta.nombre}</h3>
        <p><strong>Tiempo:</strong> ${receta.tiempo} min</p>
        <p>${receta.pasos}</p>
      `;
        recipesContainer.appendChild(card);
    });
}


// =============================================
// FUNCIÓN: Filtrar recetas por ingrediente
// =============================================
function filtrarPorIngrediente(ingrediente) {
    const lower = ingrediente.toLowerCase();

    // TODO: Reemplazar .includes() con implementación manual de búsqueda de subcadenas (como KMP o recorrido carácter por carácter)
    return recetas.filter((receta) =>
        receta.ingredientes.some((ing) => ing.toLowerCase().includes(lower))
    );
}


// =============================================
// FUNCIÓN: Actualizar historial y análisis
// =============================================
function actualizarHistorial(ingrediente) {
    historialIngredientes.push(ingrediente);

    // Sliding Window: mantenemos máximo 20 ingredientes
    if (historialIngredientes.length > 20) {
        historialIngredientes.shift();
    }

    // Mostrar en texto cuántos ingredientes únicos se han usado
    document.getElementById("analysis").textContent =
        `Usaste ${new Set(historialIngredientes).size} ingrediente${historialIngredientes.length > 1 ? 's' : ''} esta semana.`;

    actualizarSugerenciasRecientes();
}


// =============================================
// FUNCIÓN: Mostrar top ingredientes populares recientes (Sliding Window real)
// =============================================

// TODO: Sliding Window sobre últimas 5 búsquedas para encontrar ingredientes más frecuentes
function actualizarSugerenciasRecientes() {

}



// =============================================
// FUNCIÓN: Mostrar sugerencias de autocompletado
// =============================================
function autocompletar(valor) {
    const autocompletarDiv = document.getElementById("autocomplete-list");
    autocompletarDiv.innerHTML = "";

    if (!valor) return;

    currentSuggestions = [...new Set(recetas.flatMap(r => r.ingredientes))]
        .filter((ing) => ing.toLowerCase().startsWith(valor.toLowerCase()))
        .slice(0, 5);

    currentSuggestionIndex = -1;

    currentSuggestions.forEach((sug) => {
        const item = document.createElement("div");
        item.textContent = sug;
        item.classList.add("autocomplete-item");
        item.onclick = () => {
            input.value = sug;
            input.focus();
        };
        autocompletarDiv.appendChild(item);
    });
}


// =============================================
// FUNCIÓN: Buscar recetas y mostrarlas
// =============================================
function buscarYRenderizar() {
    const valor = input.value.trim();
    if (!valor) return;

    const resultados = filtrarPorIngrediente(valor);
    actualizarHistorial(valor);
    renderRecetas(resultados);
}


// =============================================
// FUNCIÓN: Ordenar recetas por nombre o tiempo
// =============================================
function ordenarRecetas(tipo) {
    let ordenadas = [...recetas];

    if (tipo === "time") {
        // TODO: Reemplazar .sort() por una implementación manual de Merge Sort (crear función mergeSort())
        ordenadas.sort((a, b) => a.tiempo - b.tiempo);
    } else {
        // TODO: Reemplazar .sort() por una implementación manual de ordenamiento alfabético (merge sort)
        ordenadas.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    renderRecetas(ordenadas);
}


// =============================================
// FUNCIÓN: Resaltar sugerencia seleccionada
// =============================================
function highlightSuggestion(items) {
    items.forEach((item, index) => {
        item.classList.toggle("active", index === currentSuggestionIndex);
    });
}


// =============================================
// EVENTO: Cuando el usuario escribe en el input
// =============================================
input.addEventListener("input", (e) => {
    const value = e.target.value.trim();
    autocompletar(value); // Solo muestra sugerencias

    if (!value) {
        renderRecetas(recetas); // Si está vacío, mostrar todas
    }
});


// =============================================
// EVENTO: Teclado para navegar sugerencias
// =============================================
input.addEventListener("keydown", (e) => {
    const items = document.querySelectorAll(".autocomplete-item");

    if (e.key === "ArrowDown") {
        e.preventDefault();
        if (currentSuggestionIndex < items.length - 1) {
            currentSuggestionIndex++;
            highlightSuggestion(items);
        }
    } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (currentSuggestionIndex > 0) {
            currentSuggestionIndex--;
            highlightSuggestion(items);
        }
    } else if (e.key === "Enter") {
        if (currentSuggestionIndex >= 0 && items[currentSuggestionIndex]) {
            input.value = items[currentSuggestionIndex].textContent;
            document.getElementById("autocomplete-list").innerHTML = "";
        }
        buscarYRenderizar(); // Ejecuta búsqueda
    }
});


// =============================================
// EVENTO: Cambiar tipo de ordenamiento
// =============================================
sortSelect.addEventListener("change", (e) => ordenarRecetas(e.target.value));


// =============================================
// EVENTO: Mostrar la receta más rápida
// =============================================
suggestionBtn.addEventListener("click", () => {
    // TODO: Reemplazar .reduce() con una implementación manual de Greedy para encontrar el menor tiempo
    const recetaMasRapida = recetas.reduce((a, b) => a.tiempo < b.tiempo ? a : b);
    renderRecetas([recetaMasRapida]);
});


// =============================================
// Render inicial de todas las recetas
// =============================================
renderRecetas(recetas);
