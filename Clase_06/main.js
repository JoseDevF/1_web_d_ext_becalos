const arregloPrueba = [8, 3, 51, 15, 9, 1, 6, 8];

/* Resumen Merge Sort

* Divide tu arreglo hasta que tengas partes chiquitas.

* Junta cada parte en orden usando merge.

* Usa recursión para resolverlo como una serie de problemas más fáciles.
 */


function mergeSort(arr) {
    /* Si el arreglo tiene 1 elemento o ninguno, ya está ordenado. No hay nada que hacer.*/
    if (arr.length <= 1) return arr;

    /* Dividimos el arreglo en dos mitades y las ordenamos recursivamente (se llama a sí misma) */
    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    /* Cuando ya tengo dos mitades ordenadas, las junto usando la función merge */
    return merge(left, right);
}

function merge(left, right) {
    const result = []
    let i = 0, j = 0;

    /* Si el número de la izquierda es menor, lo agrego al resultado y avanzo. */
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++])
        } else {
            result.push(right[j++])
        }
    }

    /* Si quedan elementos sin comparar (porque una mitad era más larga), los agregamos al final */
    return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log(mergeSort(arregloPrueba));

const persona = {
    name: "GHJGJ",
    edad: 15
}

console.log(persona)

const obj = {
    ...persona,
    hobby: "Play"
}

console.log(obj);



/* Ejemplo Merge Sort con Objetos */
const usuarios = [
    { name: "Ana", age: 32 },
    { name: "Luis", age: 25 },
    { name: "Luis", age: 26 },
    { name: "Pedro", age: 28 },
];

function mergeSortByProp(arr, prop) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSortByProp(arr.slice(0, mid), prop)
    const right = mergeSortByProp(arr.slice(mid), prop)

    return mergeByProp(left, right, prop);
}

function mergeByProp(left, right, prop) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i][prop] < right[j][prop]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++])
        }
    }

    return [...result, ...left.slice(i), ...right.slice(j)]

}

console.log(mergeSortByProp([], 'age'));


function maxSubarraySum(arr, k) {
    let maxSum = 0;
    let windowSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    maxSum = windowSum;

    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

const arraySum = [2, 1, 5, 4, 3, 2, 5, 1]

console.log(maxSubarraySum(arraySum, 5));

function lengthOfLongest(str) {
    let seen = new Set();
    let left = 0, maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        while (seen.has(str[right])) {
            seen.delete(str[left++])
        }
        seen.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

/* Implementación con Array */
function lengthOfLongestArr(str) {
    let seen = []; // Usamos array en lugar de Set
    let left = 0, maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        const currentChar = str[right];

        // Si ya está en el array, removemos caracteres desde left
        while (seen.includes(currentChar)) {
            seen.shift(); // eliminamos el primero
            left++;       // movemos la ventana a la derecha
        }

        seen.push(currentChar); // agregamos el nuevo carácter
        maxLength = Math.max(maxLength, seen.length);
    }

    return maxLength;
}

/* Creamos un array enorme */
let bigArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));

/* Probamos la implementación con Array */
console.time("Implementacion Array")
console.log(lengthOfLongestArr(bigArray))
console.timeEnd("Implementacion Array")

/* Probamos la implementación con Set */
console.time("Implementacion Set")
console.log(lengthOfLongest(bigArray))
console.timeEnd("Implementacion Set")


/* Probamos la implementación Merge Sort*/
console.time("Implementacion Merge Sort")
console.log(mergeSort(bigArray))
console.timeEnd("Implementacion Merge Sort")

/* Probamos la implementación Nativa Sort */
console.time("Implementacion Nativa Sort")
console.log(bigArray.sort())
console.timeEnd("Implementacion Nativa Sort")
