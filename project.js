const display = document.querySelector('.display');
const p = document.createElement('p')
let displayValue = ""

function makeAddition (a,b) {
    let sum = parseInt(a) + parseInt (b)
    p.innerText = sum
    display.appendChild(p)
}

function makeSubtraction (a, b) {
    p.innerText = a - b
    display.appendChild(p)
}

function makeMultiply (a, b) {
    p.innerText = a * b
    display.appendChild(p)
}

function makeDivision(a, b) {
    if (b === 0) {
    p.innerText = "Error: Division by zero";
    } else {
    p.innerText = a / b;
}
    display.appendChild(p)
}

let firstNumber = 0;
let currentOperator = "";
let secondNumber = 0;

function getResult(num1, op, num2) {
    firstNumber = num1;
    currentOperator = op;
    secondNumber = num2
}

function operate(operator, num1, num2) {
    if (operator === "+") {
      return  makeAddition(num1, num2)
    } else if (operator === "*") {
        return makeMultiply(num1, num2)
    } else if (operator === "-") {
        return makeSubtraction (num1, num2) 
    } else if (operator === "/") {
        return makeDivision (num1, num2)
    }
}

function appendNumber(number) {
    p.innerText = displayValue += number;
    p.innerText = display.value = displayValue;
    display.appendChild(p)
}

function appendOperator(operator) {
    p.innerText = displayValue = " " +operator+ " ";
    p.innerText = display.value = displayValue;
    display.appendChild(p)
}

function clearDisplay () {
    p.innerText = displayValue = "";
    display.value = displayValue
    display.appendChild(p)
}

document.querySelector('#one').addEventListener('click', () => {
    appendNumber(1)
})
document.querySelector('#two').addEventListener('click', () => {
    appendNumber(2)
})
document.querySelector('#three').addEventListener('click', () => {
    appendNumber(3)
})
document.querySelector('#four').addEventListener('click', () => {
    appendNumber(4)
})
document.querySelector('#five').addEventListener('click', () => {
    appendNumber(5)
})
document.querySelector('#six').addEventListener('click', () => {
    appendNumber(6)
})
document.querySelector('#seven').addEventListener('click', () => {
    appendNumber(7)
})
document.querySelector('#eight').addEventListener('click', () => {
    appendNumber(8)
})
document.querySelector('#nine').addEventListener('click', () => {
    appendNumber(9)
})
document.querySelector('#zero').addEventListener('click', () => {
    appendNumber(0)
})
document.querySelector('.add').addEventListener('click', () => {
    appendOperator('+')
})
document.querySelector('.sub').addEventListener('click', () => {
    appendOperator('-')
})
document.querySelector('.division').addEventListener('click', () => {
    appendOperator('/')
})
document.querySelector('.multiply').addEventListener('click', () => {
    appendOperator('*')
})
document.querySelector('.clear').addEventListener('click', clearDisplay)