// ========== Recursión: Countdown ==========
/* 
Cada llamada se representa con una caja azul que dice “Llamada: countdown(n)”.

El retorno se visualiza con una caja verde que dice “Regresando de countdown(n)”.

Se apilan una sobre otra como una pila real.

 */
function runCountdown() {
    const output = document.getElementById("countdownOutput");
    output.innerHTML = "";

    function countdown(n) {
        const callDiv = document.createElement("div");
        callDiv.className = "call-box";
        callDiv.innerText = `📥 Llamada: countdown(${n})`;
        output.prepend(callDiv);


        if (n <= 0) {
            const doneDiv = document.createElement("div");
            doneDiv.className = "call-box return-box";
            doneDiv.innerText = "🚀 ¡Despegue!";
            output.prepend(doneDiv);
            return;
        }

        setTimeout(() => {
            countdown(n - 1);

            const returnDiv = document.createElement("div");
            returnDiv.className = "call-box return-box";
            returnDiv.innerText = `📤 Regresando de countdown(${n})`;
            output.prepend(returnDiv);
        }, 3000); // visualiza más lentamente
    }

    countdown(5);
}


// ========== Two Pointers Visual ==========
const array = [2, 4, 6, 8, 10];
let left = 0, right = array.length - 1;

function renderArray() {
    const container = document.getElementById("arrayBox");
    container.innerHTML = "";
    array.forEach((val, index) => {
        const box = document.createElement("div");
        box.className = "box";
        box.innerText = val;
        if (index === left) box.innerHTML += '<div class="pointer">\u2b05\ufe0f</div>';
        if (index === right) box.innerHTML += '<div class="pointer pointer-bottom">\u27a1\ufe0f</div>';
        container.appendChild(box);
    });
}

function movePointers() {
    if (left < right) {
        left++;
        right--;
        renderArray();
    } else {
        alert("\ud83c\udf89 Punteros se encontraron.");
    }
}

renderArray();

// ========== Palíndromo Check ==========
/* 
Cada letra se muestra como una caja visual con color.

Al comparar, las letras resaltan con colores distintos.

Si coinciden, cambian a verde (✅).

Si no coinciden, se marcan en rojo (❌).

En inversión, se ve el cambio en tiempo real y con estilo.
*/
function checkPalindrome() {
    const str = document.getElementById("palInput").value.trim();
    const output = document.getElementById("palOutput");
    const visual = document.getElementById("palindromeVisual");
    visual.innerHTML = "";
    output.innerText = "";

    if (!str) return;

    const chars = str.split("");
    let l = 0, r = chars.length - 1;

    // Mostrar las letras como cajas
    chars.forEach(char => {
        const box = document.createElement("div");
        box.className = "compare-box";
        box.innerText = char;
        visual.appendChild(box);
    });

    const boxes = visual.querySelectorAll(".compare-box");

    function compareStep() {
        if (l >= r) {
            output.innerText = "✅ ¡Es palíndromo!";
            return;
        }

        // Reset estilos
        boxes.forEach(b => b.classList.remove("compare-left", "compare-right"));

        // Estilo de comparación
        boxes[l].classList.add("compare-left");
        boxes[r].classList.add("compare-right");

        if (chars[l] !== chars[r]) {
            boxes[l].classList.add("not-matched");
            boxes[r].classList.add("not-matched");
            output.innerText = "❌ No es palíndromo.";
            return;
        }

        boxes[l].classList.add("matched");
        boxes[r].classList.add("matched");

        l++;
        r--;

        setTimeout(compareStep, 1000);
    }

    compareStep();
}


// ========== Inversión String ==========
function reverseString() {
    let str = document.getElementById("revInput").value.trim();
    const output = document.getElementById("revOutput");
    const visual = document.getElementById("reverseVisual");

    if (!str) return;

    let chars = str.split('');
    let l = 0, r = chars.length - 1;
    visual.innerHTML = "";
    output.innerText = "";

    chars.forEach(char => {
        const box = document.createElement("div");
        box.className = "compare-box";
        box.innerText = char;
        visual.appendChild(box);
    });

    const boxes = visual.querySelectorAll(".compare-box");

    function swapStep() {
        if (l >= r) {
            output.innerText = `🎉 Resultado: ${chars.join('')}`;
            return;
        }

        boxes[l].classList.add("compare-left");
        boxes[r].classList.add("compare-right");

        setTimeout(() => {
            [chars[l], chars[r]] = [chars[r], chars[l]];
            boxes[l].innerText = chars[l];
            boxes[r].innerText = chars[r];

            boxes[l].classList.add("matched");
            boxes[r].classList.add("matched");

            boxes[l].classList.remove("compare-left");
            boxes[r].classList.remove("compare-right");

            l++;
            r--;
            setTimeout(swapStep, 600);
        }, 1000);
    }

    swapStep();
}

