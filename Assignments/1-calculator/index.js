/*
function calculate (num1, num2, operator): result 

operator = +, -, *, %

functions

class

*/
class data {
  constructor(num1, num2, operator) {
    this.num1 = num1;
    this.num2 = num2;
    this.operator = operator;
  }

 calculate(){
    switch (this.operator) {
      case "add":
        return this.num1 + this.num2;
        break;
      case "sub":
        return this.num1 - this.num2;
        break;
      case "multi":
        return this.num1 * this.num2;
        break;
      case "divide":
        return this.num1 / this.num2;
        break;
        default:
            return 'details is not provided'
    }
  }
}

  let result=new data(2,3,'add');
console.log("result",result);