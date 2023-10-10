const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('.equals');
const deleteBtn = document.querySelector('.delete')
const p = document.createElement('p')
let displayValue = ""

function updateDisplay() {
    p.innerText = displayValue;
    display.value = displayValue;
    display.appendChild(p);
}


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

let firstNumber = "";
let currentOperator = "";
let secondNumber = "";



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

function clearDisplay () {
    displayValue = '';
    firstNumber = '';
    currentOperator = '';
    secondNumber = '';
    updateDisplay();
}





//Event listeners

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (displayValue.length <= 9)
        displayValue += button.textContent;
        updateDisplay()
    });
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (firstNumber === '') {
            firstNumber = displayValue;
            currentOperator = button.textContent;
            displayValue = '';
        }
    });
});

document.querySelector('.clear').addEventListener('click', clearDisplay)

equalsButton.addEventListener('click', () => {
    if (firstNumber !== '' && currentOperator !== '' && displayValue !== '') {
        secondNumber = displayValue;
        operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber));
        firstNumber = '';
        currentOperator = '';
        displayValue = '';
    }
});

deleteBtn.addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    updateDisplay()
})