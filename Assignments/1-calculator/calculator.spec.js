const { calculator } = require('./function');
const Calculator  =require('./class');
describe("Testing calculator -- function", () => {
    test("Should throw invalid operator error", () => {
        expect(() => calculator(1, 2, "rr")).toThrow("Invalid operator")
    });

    test("Add 1+2=3", () => {
        expect(calculator(1, 2, "+")).toBe(3)
    })
})


describe("Testing calculator -- class", () => {
    const calculator = new Calculator();
    test("Should throw invalid operator error", () => {
        expect(() => calculator.calculate(1, 2, "rr")).toThrow("Invalid operator")
    });
    test("Should throw invalid operator error", () => {
        //passing callback so jest can do error handling
        expect(() => calculator.calculate(1, 0, "/")).toThrow("Can't divide by zero")
    });
    test("Add 1+2=3", () => {
        expect(calculator.calculate(1, 2, "+")).toBe(3) 
    })
})