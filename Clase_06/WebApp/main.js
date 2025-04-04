// ========= Merge Sort Visual =========
//const mergeArray = [8, 4, 6, 2, 9, 1];
// === Control de velocidad (ms por paso) ===
const MERGE_DELAY = 2000;

/*
Colores en Merge Sort 
🟡 amarillo: elementos siendo comparados.

🔵 azul claro: izquierda.

🔴 rojo claro: derecha.

🟢 verde: combinados. 
*/

const mergeContainer = document.getElementById("mergeArray");
const mergeOutput = document.getElementById("mergeOutput");

function renderMergeArray(arr, left = [], right = [], result = [], compare = []) {
    mergeContainer.innerHTML = "";

    arr.forEach((val, index) => {
        const box = document.createElement("div");
        box.className = "box";
        box.innerText = val;

        if (compare.includes(index)) {
            box.style.backgroundColor = "#f1c40f"; // amarillo (comparando)
        } else if (result.includes(index)) {
            box.style.backgroundColor = "#2ecc71"; // verde (resultado parcial)
        } else if (left.includes(index)) {
            box.style.backgroundColor = "#d6eaf8"; // azul claro (izquierda)
        } else if (right.includes(index)) {
            box.style.backgroundColor = "#f5b7b1"; // rojo claro (derecha)
        }

        mergeContainer.appendChild(box);
    });
}


async function mergeSortVisual(arr, startIndex = 0) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);

    const left = await mergeSortVisual(arr.slice(0, mid), startIndex);
    const right = await mergeSortVisual(arr.slice(mid), startIndex + mid);

    const merged = await mergeVisual(left, right, startIndex);

    return merged;
}

async function mergeVisual(left, right, startIndex) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        const current = result.concat(left.slice(i)).concat(right.slice(j));
        const compareIndices = [startIndex + result.length, startIndex + result.length + 1];

        renderMergeArray(current,
            range(startIndex, startIndex + left.length - 1),
            range(startIndex + left.length, startIndex + left.length + right.length - 1),
            range(startIndex, startIndex + result.length - 1),
            compareIndices
        );

        await sleep(MERGE_DELAY);

        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    while (i < left.length) result.push(left[i++]);
    while (j < right.length) result.push(right[j++]);

    const fullResult = result;
    renderMergeArray(fullResult, [], [], range(startIndex, startIndex + result.length - 1));
    await sleep(MERGE_DELAY);

    return result;
}


function startMergeSort() {
    const input = document.getElementById("mergeInput").value;
    const mergeOutput = document.getElementById("mergeOutput");
    const mergeContainer = document.getElementById("mergeArray");

    if (!input.trim()) {
        mergeOutput.innerText = "❌ Por favor ingresa un arreglo.";
        return;
    }

    const mergeArray = input.split(",").map(n => parseInt(n.trim())).filter(n => !isNaN(n));

    if (mergeArray.length === 0) {
        mergeOutput.innerText = "❌ El arreglo no es válido.";
        return;
    }

    mergeOutput.innerText = "Ordenando...";
    renderMergeArray(mergeArray);
    mergeSortVisual(mergeArray).then(sorted => {
        renderMergeArray(sorted);
        mergeOutput.innerText = `✅ Resultado final: ${sorted.join(", ")}`;
    });
}

function range(start, end) {
    const res = [];
    for (let i = start; i <= end; i++) res.push(i);
    return res;
}



// ========= Sliding Window Visual =========
function startSlidingWindow() {
    const input = document.getElementById("windowInput").value;
    const k = parseInt(document.getElementById("windowSize").value);
    const output = document.getElementById("windowOutput");
    const visual = document.getElementById("windowVisual");

    if (!input || isNaN(k)) return;

    const arr = input.split(",").map(Number);
    let maxSum = 0;
    let windowSum = 0;

    visual.innerHTML = "";
    arr.forEach(val => {
        const box = document.createElement("div");
        box.className = "box";
        box.innerText = val;
        visual.appendChild(box);
    });

    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    highlightWindow(0, k - 1);

    let index = 1;
    function slide() {
        if (index + k - 1 >= arr.length) {
            output.innerText = `✅ Suma máxima: ${maxSum}`;
            return;
        }
        windowSum = windowSum - arr[index - 1] + arr[index + k - 1];
        maxSum = Math.max(maxSum, windowSum);
        highlightWindow(index, index + k - 1);
        index++;
        setTimeout(slide, 800);
    }

    setTimeout(slide, 1000);

    function highlightWindow(start, end) {
        const boxes = visual.querySelectorAll(".box");
        boxes.forEach((b, i) => b.style.background = i >= start && i <= end ? "#d1f2eb" : "#ecf0f1");
    }
}


// ========= Substring Sliding Window =========
function startSubstringWindow() {
    const input = document.getElementById("substringInput").value;
    const output = document.getElementById("substringOutput");
    const visual = document.getElementById("substringVisual");

    let seen = new Set();
    let left = 0, maxLength = 0, bestRange = [0, 0];

    visual.innerHTML = "";
    input.split('').forEach(c => {
        const box = document.createElement("div");
        box.className = "box";
        box.innerText = c;
        visual.appendChild(box);
    });

    for (let right = 0; right < input.length; right++) {
        while (seen.has(input[right])) {
            seen.delete(input[left]);
            left++;
        }
        seen.add(input[right]);
        if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
            bestRange = [left, right];
        }
    }

    const boxes = visual.querySelectorAll(".box");
    boxes.forEach((b, i) => b.style.background = i >= bestRange[0] && i <= bestRange[1] ? "#f9e79f" : "#ecf0f1");
    output.innerText = `🔤 Longitud máxima: ${maxLength}`;
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
