// Declaramos un array constante para almacenar los productos de la lista de compras.
// Se usa `const` porque la referencia al array no cambiará, pero sí sus elementos.
const productos = [];

/**
 * Función para agregar un producto a la lista.
 * - Obtiene el valor del input.
 * - Valida que el campo no esté vacío.
 * - Verifica que el producto no esté duplicado.
 * - Si pasa las validaciones, lo agrega al array y actualiza la lista visualmente.
 */
function agregarProducto() {
    const input = document.getElementById("producto"); // Captura el campo de entrada
    const nombreProducto = input.value.trim(); // Elimina espacios en blanco innecesarios

    // Validación: No se permiten entradas vacías
    if (nombreProducto === "") {
        alert("Por favor, ingresa un producto válido.");
        return; // Detiene la ejecución si el input está vacío
    }

    // Validación: Evitar productos duplicados
    if (productos.includes(nombreProducto)) {
        alert("❌ Este producto ya está en la lista.");
        return; // Detiene la ejecución si el producto ya existe
    }

    // Agrega el producto al array
    productos.push(nombreProducto);
    
    // Actualiza la lista en el DOM
    actualizarLista();

    // Limpia el input para nuevas entradas
    input.value = "";
}

/**
 * Función para eliminar un producto específico de la lista.
 * - Busca el índice del producto en el array.
 * - Si el producto existe, lo elimina usando `splice()`.
 * - Luego, actualiza la lista visualmente.
 */
function eliminarProducto(nombreProducto) {
    const index = productos.indexOf(nombreProducto);
    if (index !== -1) { // Si el producto existe en la lista
        productos.splice(index, 1); // Elimina el producto
        actualizarLista(); // Actualiza la interfaz
    }
}

/**
 * Función para ordenar la lista de productos alfabéticamente (A-Z).
 * - Usa `sort()` para ordenar el array.
 * - Luego, actualiza la lista en pantalla.
 */
function ordenarLista() {
    productos.sort();
    actualizarLista();
}

/**
 * Función para invertir el orden de la lista de productos.
 * - Usa `reverse()` para cambiar el orden del array.
 * - Luego, actualiza la lista en pantalla.
 */
function revertirLista() {
    productos.reverse();
    actualizarLista();
}

/**
 * Función para eliminar el último producto de la lista.
 * - Usa `pop()` para quitar el último elemento del array.
 * - Luego, actualiza la lista visualmente.
 */
function eliminarUltimo() {
    productos.pop();
    actualizarLista();
}

/**
 * Función para eliminar el primer producto de la lista.
 * - Usa `shift()` para quitar el primer elemento del array.
 * - Luego, actualiza la lista visualmente.
 */
function eliminarPrimero() {
    productos.shift();
    actualizarLista();
}

/**
 * Función para vaciar completamente la lista de compras.
 * - En lugar de reasignar `productos = []`, usamos `productos.length = 0`
 *   para mantener la referencia original del array.
 * - Luego, actualiza la lista visualmente.
 */
function vaciarLista() {
    productos.length = 0; // Elimina todos los elementos del array sin cambiar su referencia
    actualizarLista();
}

/**
 * Función para actualizar la lista en el DOM.
 * - Borra el contenido actual de la lista en la interfaz.
 * - Recorre el array `productos` y crea elementos `<li>` dinámicamente.
 * - Cada producto tiene un botón de eliminar que permite quitarlo individualmente.
 */
function actualizarLista() {
    const lista = document.getElementById("lista"); // Captura el contenedor UL
    lista.innerHTML = ""; // Borra la lista actual antes de actualizar

    productos.forEach((producto, index) => {
        const li = document.createElement("li"); // Crea un nuevo elemento de lista
        li.classList.add("fade-in"); // Agrega animación de entrada
        
        // Crea el texto con el número de posición y el nombre del producto
        const texto = document.createTextNode(`${index}. ${producto} `);
        li.appendChild(texto);
        
        // Crea el botón de eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar"; // Texto del botón
        btnEliminar.classList.add("delete"); // Agrega una clase CSS
        btnEliminar.onclick = () => eliminarProducto(producto); // Asigna la función eliminarProducto al botón
        
        li.appendChild(btnEliminar); // Agrega el botón al elemento <li>
        lista.appendChild(li); // Agrega el <li> al <ul>
        
        // Breve animación de entrada
        setTimeout(() => li.classList.remove("fade-in"), 100);
    });
}

/**
 * 💡 Versión alternativa optimizada con `map()`
 * En lugar de `forEach()`, podemos construir la lista usando `.map()` y `.join("")`.
 * Esto reduce el número de manipulaciones directas del DOM.
 */
/* function actualizarLista() {
    const lista = document.getElementById("lista");
    lista.innerHTML = productos.map((producto, index) => 
        `<li class="fade-in">${index + 1}. ${producto} 
        <button class="delete" onclick="eliminarProducto('${producto}')">Eliminar</button></li>`
    ).join(""); // Convierte el array en un solo string de HTML
} */
