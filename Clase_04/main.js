const miArreglo = [1, 3, 5, 7, 11, 15, 25, 36, 102, 150];

const miArregloAlt = ["agua", "aire", "barco", "cielo", "luna", "sol", "Taza", "Tetera"]

// Busqueda lineal: O(n)
const linearSearch = (arreglo, target) => {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === target) {
            return i;
        }
    }
    return -1;
}

// Iterativa
// Búsqueda Binaria: O(log n) (solo con arrays ordenados)
const binarySearch = (arreglo, target) => {
    let _left = 0;
    let _right = arreglo.length - 1;
    while (_left <= _right) {
        const mid = Math.floor((_left + _right) / 2);
        if (arreglo[mid] == target) {
            return mid;
        } else if (arreglo[mid] < target) {
            _left = mid + 1;
        } else {
            _right = mid - 1
        }
    }
    return -1;
}

// Recursiva (Busqueda binaria)
const binarySearchR = (arreglo, target, _left = 0, _right = arreglo.length - 1) => {
    if (_left > _right) return -1;

    // No encontre el valor
    const mid = Math.floor((_left + _right) / 2);

    // Encontre el valor
    if (arreglo[mid] === target) {
        return mid;
    }
    // Busco solo del lado derecho
    if (arreglo[mid] < target) {
        return binarySearchR(arreglo, target, mid + 1, _right);
    }

    // Busco del lado solo izquierdo
    return binarySearchR(arreglo, target, _left, mid - 1);
}


console.time('lineal');
console.log(linearSearch(miArreglo, 5));
console.timeEnd('lineal');

console.time('binaria');
console.log(binarySearch(miArreglo, 5));
console.timeEnd('binaria');

console.time('binariaR');
console.log(binarySearchR(miArreglo, 5));
console.timeEnd('binariaR');

console.time('linealTexto');
console.log(linearSearch(miArregloAlt, "barco"));
console.timeEnd('linealTexto');

console.time('binariaTexto');
console.log(binarySearch(miArregloAlt, "barco"));
console.timeEnd('binariaTexto');

console.time('binariaRTexto');
console.log(binarySearchR(miArregloAlt, "barco"));
console.timeEnd('binariaRTexto');