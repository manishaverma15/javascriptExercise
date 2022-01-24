//  Write a function for searching JavaScript arrays with a binary search.
let array = [12, 44, 48, 67, 77];
console.log("array value", array);
document.getElementById("answer").innerHTML = array;
let arrlength = array.length;
let search = 48;
document.getElementById("searchedNumber").innerHTML = search;
// let start = 0;
// let end = arrlength - 1;
let binarySearch = function (array, search, start, end) {
  
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log("mid value", mid);
    if (array[mid] === search) {
      return true;
      // document.write("element found at mid value")
    }

    if (array[mid] > search) {
      return binarySearch(array, search, start, mid - 1);
    } else {
      return binarySearch(array, search, mid + 1, end);
    }
  }
};
if (binarySearch(array, search, 0, array.length - 1))
  document.write("Element found. <br>");
else document.write("Element not found. <br>");

// let search = 48;
// document.getElementById("searchedNumber").innerHTML=search;
// let start = 0;
// let end = arrlength - 1;
// console.log("value of array ,start,end", arrlength, start, end);
// document.getElementById("answer").innerHTML = array;

// function binarySearch() {
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     console.log("midvalue", mid);
//     // let search =document.getElementById("numberSearch").value
//     // console.log("value to be search",search);
//     if (array[mid] === search) {
//       document.getElementById("answer").innerHTML =
//         "The search element is the mid value";
//         break;
//     } else if (search > mid) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//     // document.getElementById("answer").innerHTML="the element found at the position:";
//   }
// }
// document.getElementById("button").addEventListener("click", binarySearch);
