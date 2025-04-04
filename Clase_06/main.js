const arregloPrueba = [8, 3, 51, 15, 9, 1, 6, 8];

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    return merge(left, right);
}

function merge(left, right) {
    const result = []
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++])
        } else {
            result.push(right[j++])
        }
    }

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