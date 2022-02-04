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

})


describe("Testing Searching", () => {
  test("Should throw size error", () => {
    const arr = new Search(10);
    expect(() => arr.searchElement(10)).toThrow("array is empty");
  });

  test("Should search successfully", () => {
    const arr = new Search(10);
    arr.pushElement(7);
    arr.pushElement(87);
    arr.pushElement(56);
    arr.pushElement(12);
    arr.pushElement(70);
    expect(arr.searchElement(56)).toBe(2);
  });
})

describe("Testing Binary Search", () => {
  test("Should throw size error", () => {
    const binaryArray = new Search(10);
    expect(() => binaryArray.binarySearch(10).toThrow("array is empty"));
  });
  test("Should search successfully", () => {
    const binary = new Search(10, [5, 32, 56, 67, 88, 98]);
    expect(binary.binarySearch(67)).toBe(3);
  })
})
