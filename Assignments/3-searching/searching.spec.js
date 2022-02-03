const Search = require("./searching");
describe("Testing Push", () => {
  test("Should throw size error", () => {
    const arr = new Search(0);
    expect(() => arr.pushElement(10)).toThrow("array is full");
  });

  test("Should push element successfully", () => {
    const arr = new Search(10);
    arr.pushElement(4);
    arr.pushElement(9);
    arr.pushElement(6);
    expect(arr.array).toEqual([4, 9, 6]);
  });
  
}
)
