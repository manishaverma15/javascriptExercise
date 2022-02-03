class Search {
  array = [];
  constructor(size) {
    this.size = size;
  }
  pushElement(ele) {
    if (this.array.length === this.size) {
      throw Error("array is full");
    } else {
      this.array[this.array.length] = ele;
      console.log("elements:", this.array);
    }
  }

  searchElement(search) {
    if (this.array.length === 0) {
      throw Error("array is empty");
    }
    for (let i = 0; i <= this.array.length; i++) {
      if (this.array[search] === this.array[this.array.length]) {
        let index = this.array.indexOf(this.array[this.array.length]);
        console.log("element found at :", index);
      }
      else{
          console.log("element not found")
      }
    }

  }
}
const arr = new Search(10);
arr.pushElement(8);
arr.pushElement(78);
arr.pushElement(34);
arr.pushElement(17);

arr.searchElement(8);

module.exports = Search;
