/*
function calculate (num1, num2, operator): result 

operator  +, -, *, %

functions

class

*/
module.exports = class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }
  sub(num1, num2) {
    return num1 - num2;
  }
  multiplication(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    if (num2 == 0) {
      throw Error("Can't divide by zero")
    }
    else {
      return num1 / num2;
    }
  }

  calculate(num1, num2, operator) {
    switch (operator) {
      case "+":
        return this.add(num1, num2);
      case "-":
        return this.sub(num1, num2);
      case "*":
        return this.multiplication(num1, num2);
      case "/":
        return this.divide(num1, num2);
      default:
        throw Error("Invalid operator")
    }
  }
}
