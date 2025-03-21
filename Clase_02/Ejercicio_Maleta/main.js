const maleta = [];

function agregarItem() {
    // 🚀 Completar: Obtener el valor del input y validar que no esté vacío ni duplicado.
    // 🚀 Completar: Agregar el artículo al array maleta y actualizar la lista.
    const input = document.getElementById("item");
    const articulo = input.value.trim();

    if (!articulo) {
        alert("Ingresa un artículo válido.");
        return;
    }

    if (maleta.includes(articulo)) {
        alert("Ya agregaste este artículo.");
        return;
    }

    if (maleta.length >= 7) {
        alert("No puedes llevar más de 7 artículos.");
        return;
    }

    maleta.push(articulo);
    actualizarMaleta();
    input.value = "";
}

function ordenarMaleta() {
    // 🚀 Completar: Ordenar los elementos de la maleta alfabéticamente.
    maleta.sort();
    actualizarMaleta();
}

function finalizarEmpaque() {
    // 🚀 Completar: Mostrar alerta si hay menos de 3 artículos, de lo contrario, mensaje de éxito.
    if (maleta.length < 3) {
        alert("Asegúrate de llevar al menos 3 artículos esenciales.");
    } else {
        alert("Equipaje listo!¡Disfruta tu viaje!");
    }
}

function actualizarMaleta() {
    // 🚀 Completar: Renderizar los elementos de la maleta en la lista <ul>.
    const lista = document.getElementById("lista");
    lista.innerHTML = maleta.map((articulo, index) => 
        `<li>${index + 1}. ${articulo} 
        <button onclick="eliminarItem('${articulo}')">Eliminar</button></li>`
    ).join("");
}