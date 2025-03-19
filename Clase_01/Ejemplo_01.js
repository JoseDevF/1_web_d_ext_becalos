/* var nombre = "Juan Perez";

nombre = "Adolfo Suarez"

function mostrarNombre(){
    var nombre="Jose Hernandez"
    console.log(nombre);
} */

const nombre = "Juan perez";

// nombre = "Jose Hernández" - No permitido
/* const mostrarNombre = function (){
    console.log(nombre)
} */


let nombre_alt = "Juan Pérez"
nombre_alt = "José Hernández"
function mostrarNombre (){
    let nombre_func="Juan Pérez";
    console.log(nombre_alt)
}

mostrarNombre();

console.log(pais);
var pais= "México";
console.log(pais);

function pruebaVar() {
    let ciudad = "Madrid";
    if (true) {
        console.log(ciudad)
    }
    console.log(ciudad); // Debería dar error, pero imprime "Madrid" debido a `var`
}

pruebaVar();