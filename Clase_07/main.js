import { HashTable } from './HashTable.js';

const contarLetras = (cadena) => {
    const frecuencias = new Map();
    for (let letra of cadena) {
        if (frecuencias.has(letra)) {
            frecuencias.set(letra, frecuencias.get(letra) + 1);
        } else {
            frecuencias.set(letra, 1)
        }
    }

    frecuencias.delete("a");

    return frecuencias
}

console.log(contarLetras("banAna"));

const obj = {
    0: 'a',
    1: 'b'
}

console.log(obj.hasOwnProperty('0'));

console.log(Object.keys(obj));

console.log(Object.values(obj));

//const resultado = document.querySelector('#resultado');
/* const texto = "savsgfahsvgas"
const frecuencias = {}

for (let char of texto) {
    frecuencias[char] = (frecuencias[char] || 0) + 1;
}

resultado.innerHTML = Object.entries(frecuencias)
    .map(([letra, veces]) => `${letra}:${veces}`)
    .join("<br>"); */

const tieneDuplicados = (arr) => {
    const seen = new Set();

    for (let num of arr) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false
}

console.log(tieneDuplicados([1, 2, 3, 2, 4, 5]))


const myTable = new HashTable(10);

// Guardamos valores
myTable.set("nombre", "Carla");
myTable.set("edad", 30);
myTable.set("ciudad", "CDMX");

// Obtenemos valores
console.log(myTable.get("nombre")); // "Carla"
console.log(myTable.get("edad"));   // 30
console.log(myTable.get("ciudad")); // "CDMX"


/* Busqueda de subcadenas */

const buscarIngenuo = (texto, patron) => {
    const posiciones = [];
    for (let i = 0; i <= texto.length - patron.length; i++) {
        if (texto.slice(i, i + patron.length) === patron) {
            posiciones.push(i);
        }
    }
    return posiciones;
}

/* Rabin Karp educativo (solo para entender el principio) */
const rabinKarp = (texto, patron) => {

    /* Generar firma del patron a buscar */
    const firma = str => [...str].reduce((a, c) => a + c.charCodeAt(0), 0);
    const firmaTarget = firma(patron);
    console.log(firmaTarget);

    const res = [];

    /* Recorrer por ventanas */
    for (let i = 0; i <= texto.length - patron.length; i++) {

        const window = texto.slice(i, i + patron.length);

        /* Comparar firmas y si coincide comparamos palabra (evita falsos positivos como sol == los) */
        if (firma(window) === firmaTarget && window === patron) {
            res.push(i)
        }
    }
    return res;
}

// Rabin-Karp con rolling hash (suma ASCII)
const rabinKarpRolling = (text, pattern) => {
    const res = []; // Aquí guardamos las posiciones donde encontramos el patrón
    const m = pattern.length;

    // Calculamos el "hash objetivo", es decir, el valor del patrón que vamos a buscar
    // En este caso, el hash es la suma de los códigos ASCII de cada letra
    const targetHash = [...pattern].reduce((acc, c) => acc + c.charCodeAt(0), 0);

    // Calculamos el hash de la primera ventana del texto (del mismo tamaño que el patrón)
    let currentHash = [...text.slice(0, m)].reduce((acc, c) => acc + c.charCodeAt(0), 0);

    // Recorremos el texto ventana por ventana
    for (let i = 0; i <= text.length - m; i++) {

        // Si el hash coincide, comparamos directamente las cadenas (por si fue una coincidencia falsa)
        if (currentHash === targetHash) {
            const window = text.slice(i, i + m);
            if (window === pattern) res.push(i); // Si realmente coincide, guardamos la posición
        }

        // Aquí ocurre la mejora importante: "rolling hash"
        // En lugar de volver a calcular el hash desde cero (como en el Rabin-Karp original),
        // simplemente restamos el carácter que salió y sumamos el nuevo carácter que entra
        if (i < text.length - m) {
            currentHash =
                currentHash - text.charCodeAt(i) + text.charCodeAt(i + m);
        }
    }

    return res;
};



const generarTexto = (caracter, repeticiones, final) =>
    caracter.repeat(repeticiones) + final;

const textoOriginal = generarTexto("a", 10000000, "ab");
const patron = "aaaaaaaaaaaaaaaaaab"

console.time("Ineguno")
console.log(buscarIngenuo(textoOriginal, patron));
console.timeEnd("Ineguno")

console.time("RabinKarp")
console.log(rabinKarp(textoOriginal, patron));
console.timeEnd("RabinKarp")

console.time("RabinKarpRolling")
console.log(rabinKarpRolling(textoOriginal, patron));
console.timeEnd("RabinKarpRolling")
