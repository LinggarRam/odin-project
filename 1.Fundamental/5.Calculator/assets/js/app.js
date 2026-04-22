function add(a, b) {
    return a + b;
}
function subtract(a ,b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) return "Error!";
    return a / b;
}

// VARIABEL OPERASI 
let firstNumber = "";
let operator = "";
let secondNumber = "";
let shouldResetDisplay = false;

// FUNGSI OPERATE
function operate(op, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    if (op === "+") return add(a, b);
    else if (op === "-") return subtract(a, b);
    else if (op === "*") return multiply(a, b);
    else if (op === "/") return divide(a, b);
}

const display = document.getElementById("display");
const expression = document.getElementById("expression");

function updateDisplay (value) {
    if (!isNaN(value) && value !== "" && value.toString().includes(".")) {
        value = parseFloat(parseFloat(value).toPrecision(10));
    }
    display.textContent = value;
}

document.querySelectorAll(".btn-number").forEach(btn => {
    btn.addEventListener("click", () => {
        const number = btn.dataset.number;

        if (number === "00") {
            if (display.textContent === "0") return;
            updateDisplay(display.textContent + "00");
            return;
        }

        if (number === "." && display.textContent.includes(".")) return;

        if (shouldResetDisplay) {
            updateDisplay(number === "." ? "0." : number);
            shouldResetDisplay = false;
            return;
        }

        if (display.textContent === "0" && number !== ".") {
            updateDisplay(number);
        } else {
            updateDisplay(display.textContent + number);
        }
    });
});

document.querySelectorAll(".btn-operator").forEach(btn => {
    btn.addEventListener("click", () => {
        const op = btn.dataset.operator;

        if (!op) return;

        if (firstNumber !== "" && operator !== "" && !shouldResetDisplay) {
            secondNumber = display.textContent;

            const result = operate(operator, firstNumber, secondNumber);

            updateDisplay(result);

            expression.textContent = `${firstNumber} ${operatorSymbol(operator)} ${secondNumber} =`;
            firstNumber = result.toString;
        } else {
            firstNumber = display.textContent;
        }

        operator = op;
        expression.textContent = `${firstNumber} ${operatorSymbol(op)}`;
        shouldResetDisplay = true;
    });
});

document.getElementById("equals").addEventListener("click", () => {
    if (firstNumber === "" || operator === "") return;

    secondNumber = display.textContent;
    const result = operate(operator, firstNumber, secondNumber);

    expression.textContent = `${firstNumber} ${operatorSymbol(operator)} ${secondNumber} =`;
    updateDisplay(result);

    firstNumber = "";
    secondNumber = "";
    operator = "";
    shouldResetDisplay = true;
});

document.getElementById("clear").addEventListener("click", () => {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    shouldResetDisplay = false;
    updateDisplay("0");
    expression.textContent = "";
});

document.getElementById("backspace").addEventListener("click", () => {
    if (shouldResetDisplay) return;

    const current = display.textContent;
    if (current.length <= 1) {
        updateDisplay("0");
    } else {
        updateDisplay(current.slice(0, -1));
    }
});

function operatorSymbol(op) {
    if (op === "+") return "+";
    if (op === "-") return "-";
    if (op === "*") return "*";
    if (op === "/") return "/";
}