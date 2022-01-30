const Stack = require ('./stack')
describe("Testing Push",()=>{
    test("Should throw size error", () => {
        const stack = new Stack(0);
        expect(() => stack.pushElement(5)).toThrow("stack is full");
    });

    test("Should push element successfully", () => {
        const stack = new Stack(5);
        stack.pushElement(1);
        stack.pushElement(2);
        expect(stack.stack).toEqual([1, 2]);
    });
})
    
