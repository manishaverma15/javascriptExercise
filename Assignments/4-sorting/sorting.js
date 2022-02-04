let array = []
class Sort {
    constructor(size, arr = []) {
        this.size = size;
        this.array = arr;
    }
    bubbleSort() {

        let temp;
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array.length; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    temp = this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = temp;
                }

            }
        }
        return this.array;
    }

}

const sort = new Sort(10,[67,4,87,23,15,99]);
sort.bubbleSort();
console.log("sorting array",sort.array);