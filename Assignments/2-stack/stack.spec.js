const Stack = require("./stack");
describe("Testing Push", () => {
  test("Should throw size error", () => {
    const stack = new Stack(0);
    expect(() => stack.pushElement(5)).toThrow("stack is full");
  });

  test("Should push element successfully", () => {
    const stack = new Stack(5);
    stack.pushElement(4);
    stack.pushElement(9);
    stack.pushElement(6);
    expect(stack.stack).toEqual([4, 9, 6]);
  });

  describe("Testing Pop", () => {
    test("Should throw size error", () => {
      const stack = new Stack(5);
      expect(() => stack.popElement()).toThrow("stack is empty");
    });
    test("Should pop element successfully", () => {
      const stack = new Stack(5);
      stack.pushElement(4);
      stack.pushElement(9);
      stack.pushElement(6);
      expect(stack.popElement()).toBe(6);
      expect(stack.stack).toEqual([4, 9]);
    });
  });
  describe("Testing top element", () => {
    test("Should throw size error", () => {
      const stack = new Stack(5);
      expect(() => stack.peekElement()).toThrow("stack is empty");
    });
    test("Should show peek element successfully", () => {
      const stack = new Stack(5);
      stack.pushElement(4);
      stack.pushElement(9);
      stack.pushElement(12);
      expect(stack.peekElement()).toBe(12);
      expect(stack.stack).toEqual([4, 9, 12]);
    });
  });
  describe("Testing Entire Array", () => {
    test("Should throw size error", () => {
      const stack = new Stack(5);
      expect(() => stack.entireStack()).toThrow("stack is empty");
    });
    test("Should show entire stack", () => {
      const stack = new Stack(5);
      stack.pushElement(7);
      stack.pushElement(3);
      stack.pushElement(9);

      expect(stack.entireStack()).toEqual([7, 3, 9]);
    });
  });
});
