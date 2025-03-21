class Videojuego {
    constructor(titulo, genero, precio) {
        // 🚀 Completar: Definir propiedades para título, género y precio.
        this.titulo = titulo;
        this.genero = genero;
        this.precio = precio;
    }
}

const juegos = [];

function agregarJuego() {
    // 🚀 Completar: Obtener valores del input y validar que sean correctos.
    // 🚀 Completar: Agregar un objeto Videojuego al array juegos.
    const titulo = document.getElementById("titulo").value.trim();
    const genero = document.getElementById("genero").value.trim();
    const precio = parseFloat(document.getElementById("precio").value.trim());

    if (!titulo || !genero || isNaN(precio) || precio <= 0) {
        alert("Ingresa datos válidos.");
        return;
    }

    juegos.push(new Videojuego(titulo, genero, precio));
    actualizarJuegos();

}

function filtrarPorGenero() {
    // 🚀 Completar: Filtrar los videojuegos por género ingresado.
    const generoFiltro = document.getElementById("filtro").value.trim();
    const filtrados = juegos.filter(juego => juego.genero.toLowerCase() === generoFiltro.toLowerCase());
    actualizarJuegos(filtrados);
}

function calcularTotal() {
    // 🚀 Completar: Calcular el total gastado usando reduce().
    const total = juegos.reduce((sum, juego) => sum + juego.precio, 0);
    alert(`Total gastado en videojuegos: $${total}`);

}

function actualizarJuegos(lista=juegos) {
    // 🚀 Completar: Renderizar la lista de videojuegos en el DOM.
    const ul = document.getElementById("lista");
    ul.innerHTML = lista.map((juego, index) =>
        `<li>${index + 1}. ${juego.titulo} - ${juego.genero} - $${juego.precio}</li>`
    ).join("");

}