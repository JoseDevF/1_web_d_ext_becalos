const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                { value: 4, children: [] },
                { value: 5, children: [] }
            ]
        },
        {
            value: 3,
            children: []
        }
    ]
}

/* Recorrido DFS */

function dfs(node) {
    console.log(node.value);
    for (let child of node.children) {
        dfs(child)
    }
}

/* BFS */

function bfs(root) {
    const cola = [root];
    while (cola.length) {
        const node = cola.shift()
        console.log(node.value)
        cola.push(...node.children);
    }
}


/* dfs(tree);
console.log("-----------------");
bfs(tree); */

/* DP */

function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}


function fibMemo(n, memo = {}) {
    //console.log(`Número ${n} OBJ MEMO: ${Object.keys(memo)} `)
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}

console.time("fibo")
console.log(fib(15));
console.timeEnd("fibo")

console.time("fiboMem")
console.log(fibMemo(15));
console.timeEnd("fiboMem")


/* Ejemplo greedy o gloton (Siempre la mejor decisión sin que me importe el futuro) */
/* En este caso las tareas de menor duración siempre, sin importar o tratar de hacer combinaciones equilibradas ni nada por el estilo */

// Lista de tareas con su duración en horas
const tareas = [
    { nombre: "Fix bugs", duracion: 2 },
    { nombre: "Revisar pull requests", duracion: 1 },
    { nombre: "Escribir documentación", duracion: 3 },
    { nombre: "Llamada con cliente", duracion: 1.5 },
    { nombre: "Diseñar nueva función", duracion: 4 },
    { nombre: "Actualizar dependencias", duracion: 0.5 }
];

const limiteHoras = 8;
let tiempoUsado = 0;
const tareasSeleccionadas = [];

// Greedy: ordenar por duración ascendente
const ordenadas = tareas.sort((a, b) => a.duracion - b.duracion);

// Seleccionar tareas mientras quepan en el tiempo disponible
for (const tarea of ordenadas) {
    if (tiempoUsado + tarea.duracion <= limiteHoras) {
        tareasSeleccionadas.push(tarea);
        tiempoUsado += tarea.duracion;
    }
}

// Mostrar resultados
console.log(`Tiempo disponible: ${limiteHoras}h`);
console.log(`Tiempo usado: ${tiempoUsado}h`);
console.log("Tareas seleccionadas:");
tareasSeleccionadas.forEach((t, i) => {
    console.log(`  ${i + 1}. ${t.nombre} (${t.duracion}h)`);
});


function darCambioGreedy(cantidad, monedasDisponibles) {
    // Ordenar las monedas de mayor a menor (Greedy)
    monedasDisponibles.sort((a, b) => b - a);

    const resultado = {};
    let restante = cantidad;

    for (const moneda of monedasDisponibles) {
        const cantidadMonedas = Math.floor(restante / moneda);
        if (cantidadMonedas > 0) {
            resultado[`$${moneda}`] = cantidadMonedas;
            restante -= cantidadMonedas * moneda;
        }
    }

    return resultado;
}

// Ejemplo real:
const cambio = 28;
const monedas = [10, 5, 1];

const resultado = darCambioGreedy(cambio, monedas);

console.log(`Cambio para $${cambio}:`);
Object.entries(resultado).forEach(([denominacion, cantidad]) => {
    console.log(`- ${cantidad} moneda(s) de ${denominacion}`);
});

