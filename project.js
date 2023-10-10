const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('.equals');
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
    p.innerText = displayValue = "";
    display.value = displayValue
    display.appendChild(p)
}





//Event listeners

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        p.innerText = displayValue += button.textContent;
        display.value = displayValue;
        display.appendChild(p)
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
        
        // Perform the calculation based on the operator
        operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber));
        
        // Reset values for future calculations
        firstNumber = '';
        currentOperator = '';
        displayValue = '';
    }
});