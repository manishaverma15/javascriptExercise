function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}
function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return sub(num1, num2);
        case "*":
            return multiplication(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            throw Error("Invalid operator");
    }
}

module.exports = {
    add,
    sub,
    multiplication,
    divide,
    calculator,
}