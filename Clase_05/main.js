function timer(n) {
    if (n === 0) {
        console.log("¡Despegue!");
        return;
    }
    setTimeout(() => {
        timer(n - 1);
    }, 1000)
    console.log(n);
}

/* console.log(timer(5)); */

function sum(n) {
    if (n === 10) return 0;
    return n + sum(n + 1)
}

console.log(sum(5));

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log("Factorial: ", factorial(5));


const arrayN = [1,
    [2, 3],
    [4,
        [5],
        [6,
            [10, 5]
        ]
    ]
];

function sumArr(arr) {
    let sum = 0;
    for (let item of arr) {
        if (Array.isArray(item)) {
            sum += sumArr(item);
        } else {
            sum += item;
        }
    }
    return sum;
}

console.log(sumArr(arrayN));