const gastos = [];

function agregarGasto() {
    // 🚀 Completar: Obtener valores del input y validar que sean correctos.
    // 🚀 Completar: Agregar un objeto con descripción y monto al array gastos.
    const descripcion = document.getElementById("descripcion").value.trim();
    const monto = parseFloat(document.getElementById("monto").value.trim());

    if (!descripcion || isNaN(monto) || monto <= 0) {
        alert("Ingresa una descripción válida y un monto mayor a 0.");
        return;
    }

    gastos.push({ descripcion, monto });
    actualizarGastos();
}

function ordenarGastos() {
    // 🚀 Completar: Ordenar los gastos de mayor a menor.
    gastos.sort((a, b) => b.monto - a.monto);
    actualizarGastos();
}

function calcularTotal() {
    // 🚀 Completar: Calcular el total gastado con reduce() y mostrarlo en alerta.
    const total = gastos.reduce((sum, gasto) => sum + gasto.monto, 0);
    alert(`💰 Total gastado: $${total}`);

}

function actualizarGastos() {
    // 🚀 Completar: Renderizar la lista de gastos en el DOM.
    const lista = document.getElementById("lista");
    lista.innerHTML = gastos.map((gasto, index) => 
        `<li>${index + 1}. ${gasto.descripcion} - $${gasto.monto} 
        <button onclick="eliminarGasto(${index})">Eliminar</button></li>`
    ).join("");
}