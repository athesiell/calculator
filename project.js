const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('.equals');
const deleteBtn = document.querySelector('.delete')
const dotBtn = document.querySelector('.dot')
let displayValue = "";
let firstNumber = "";
let currentOperator = "";
let secondNumber = "";




function updateDisplay() {
    display.innerText = displayValue;
}

//Functions for basic math

function makeAddition (a,b) {
    displayValue = (parseFloat(a) + parseFloat(b)).toString();
}

function makeSubtraction (a, b) {
    displayValue = (parseFloat(a) - parseFloat(b)).toString();
}

function makeMultiply (a, b) {
    displayValue = (parseFloat(a) * parseFloat(b)).toString();
}

// In order to not get "Infinity", I needed to create variables with parseFloat values
function makeDivision(a, b) {
    const parsedA = parseFloat(a);
    const parsedB = parseFloat(b);
    if (parsedB === 0) {
        displayValue = "Do not do that";
    } else {
        displayValue = (parsedA / parsedB).toString();
    }
}

// Function for calculation

function operate(operator, num1, num2) {
    if (operator === "+") {
        makeAddition(num1, num2)
    } else if (operator === "*") {
         makeMultiply(num1, num2)
    } else if (operator === "-") {
         makeSubtraction (num1, num2) 
    } else if (operator === "/") {
         makeDivision (num1, num2)
    } 
    updateDisplay()
}

function clearDisplay() {
    displayValue = '';
    firstNumber = '';
    currentOperator = '';
    secondNumber = '';
    updateDisplay();
}


//Event listeners

window.addEventListener('keydown', (e) => {
    const key = document.querySelector(`button[data-key="${e.keyCode}"], button[data-key-numpad="${e.keyCode}"]`)
    key.click()
    
})

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
        } else if (secondNumber === "") {
            currentOperator = button.textContent
        } else {
            secondNumber = displayValue;
            operate(currentOperator, firstNumber, secondNumber);
            firstNumber = displayValue;
            currentOperator = button.textContent;
            displayValue = '';
        }
    });
});

document.querySelector('.clear').addEventListener('click', clearDisplay) // clears everything

equalsButton.addEventListener('click', () => {
    if (firstNumber !== '' && currentOperator !== '' && displayValue !== '') {
        secondNumber = displayValue;
        operate(currentOperator, firstNumber, secondNumber);
        firstNumber = displayValue
        currentOperator = '';
    }
});

deleteBtn.addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    updateDisplay()
})

dotBtn.addEventListener('click', () => {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
});