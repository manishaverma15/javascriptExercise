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
            throw Error("stack is full")
        }
        else {
            this.stack[this.stack.length] = ele;
        }
    }

}
// const stack = new Stack(5);
// stack.pushElement(4);

module.exports = Stack;

// array[index] = value