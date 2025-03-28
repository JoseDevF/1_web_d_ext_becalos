/* EJERCICIO 1 */

/* 

Tienes un sistema de comentarios donde puedes ver cuántas palabras escribió un usuario. Para eso, debes contar cuántas palabras hay en una lista de mensajes escritos por él.

*/

// Versión ITERATIVA ya implementada
function contarPalabras(mensajes) {
    let total = 0;
    for (let i = 0; i < mensajes.length; i++) {
        const palabras = mensajes[i].split(" ").length;
        total += palabras;
    }
    return total;
}

const mensajes = [
    "Hola, ¿cómo estás?",
    "Estoy aprendiendo JavaScript.",
    "¡Es divertido!"
];

console.log(contarPalabras(mensajes)); // → 9


/* Implementar versión recursiva */



/* EJERCICIO 2 */

/* 

Una aplicación muestra un historial de navegación como una pila (stack), y quiere invertir ese historial para mostrarlo cronológicamente.

*/

// Versión RECURSIVA ya implementada
function invertirHistorial(historial) {
    if (historial.length === 0) return [];
    const ultimo = historial.pop();
    return invertirHistorial(historial).concat(ultimo);
}

const historial = ["Página A", "Página B", "Página C"];
console.log(invertirHistorial(historial)); // → ["Página C", "Página B", "Página A"]

/* Implementar versión iterativa */