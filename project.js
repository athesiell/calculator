function makeAddition (a,b) {
    let sum =  parseInt(a) + parseInt (b)
    return sum
}

function makeSubtraction (a, b) {
    return a - b
}

function makeMultiply (a, b) {
    return a * b
}

function makeDivision(a, b) {
    if (b === 0) {
      return "Error: Division by zero";
    }
    return a / b;
}

let firstNumber = 0;
let operator = ["+","-","/","*"];
let secondNumber = 0;

function getResult(num1, op, num2) {
    firstNumber = num1;
    operator = op;
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
getResult(15, "/", 5)
let result = operate(operator, firstNumber, secondNumber)
console.log(result)
