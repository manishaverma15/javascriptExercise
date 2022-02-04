
class Search {
  array = [];
  constructor(size, arr = []) {
    this.size = size;
    this.array = arr;
  }
  pushElement(ele) {
    if (this.array.length === this.size) {
      throw Error("array is full");
    } else {
      this.array[this.array.length] = ele;
      // console.log("elements:", this.array);
    }
  }

  searchElement(search) {
    if (this.array.length === 0) {
      throw Error("array is empty");
    }
    for (let i = 0; i <= this.array.length; i++) {
      if (search === this.array[i]) {

        return i;
      }

    }

  }
  binarySearch(searchele) {
    let start = 0, end = this.array.length - 1;
    if (this.array.length === 0) {
      throw Error("array is empty");
    }
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      console.log("value of mid", mid);
      if (this.array[mid] === searchele) {
        console.log("element found at:", mid);
        return mid;
      }
      else if (this.array[mid] < searchele) {
        start = mid + 1;
      }
      else {
        end = mid - 1;
      }
    }
    console.log("element is  not found in the array ");
    return -1;
  }
}
// const binary = new Search(10, [5, 32, 56, 67, 88, 98]);
//  binary.binarySearch(67);
// const arr = new Search(10);
// arr.pushElement(8);
// arr.pushElement(78);
// arr.pushElement(34);
// arr.pushElement(17);

// arr.searchElement(17);

module.exports = Search;
