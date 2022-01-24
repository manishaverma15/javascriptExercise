//  Write a function for searching JavaScript arrays with a binary search.
let array = [12, 44, 48, 67, 77];
console.log("array value", array);
let arrlength = array.length;
let start = array[0];
let end = array[arrlength - 1];
console.log("value of array ,start,end", arrlength, start, end);
document.getElementById("answer").innerHTML = array;

function binarySearch() {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log("midvalue", mid);
    let search = 48;
    // let search =document.getElementById("numberSearch").value
    // console.log("value to be search",search);
    if (array[mid] === search) {
      document.getElementById("answer").innerHTML =
        "The search element is the mid value";
    } else if (search > mid) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    // document.getElementById("answer").innerHTML="the element found at the position:";
  }
}
document.getElementById("button").addEventListener("click", binarySearch);
