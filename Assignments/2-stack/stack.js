/* 
implement fixed size stack using array
const stack = new Stack(5);

function to implement:

push - push new element
pop - remove top and return 
peek - return top value without removing
getStack - return entire stack

*/
class Stack {
  stack = [];
  constructor(size) {
    this.size = size;
  }

  pushElement(ele) {
    if (this.stack.length === this.size) {
      throw Error("stack is full");
    } else {
      this.stack[this.stack.length] = ele;
      // console.log("elements:", this.stack);
    }
  }

  popElement() {
    if (this.stack.length === 0) {
      throw Error("stack is empty");
    } else {
      var lastItem = this.stack[this.stack.length - 1];
      //  console.log("lastItem",lastItem);
      this.stack.length = this.stack.length - 1;
      // console.log("after popping:", this.stack);
      return lastItem;
    }
  }
  peekElement() {
    if (this.stack.length === 0) {
      throw Error("stack is empty");
    } else {
      var topElement = this.stack[this.stack.length - 1];
      return topElement;
    }
  }
  entireStack() {
    if (this.stack.length === 0) {
      throw Error("stack is empty");
    } else {
      return this.stack;
    }
  }
}
const stack = new Stack(5);
module.exports = Stack;

// array[index] = value
