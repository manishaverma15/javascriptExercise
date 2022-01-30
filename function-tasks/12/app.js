//  Write a function for searching JavaScript arrays with a binary search.
let array = [12, 44, 48, 67, 77];
console.log("array value", array);
document.getElementById("answer").innerHTML = array;
let binarySearch = function (array, search) {

  let start = 0, end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log("mid value", mid);
    if (array[mid] === search) {
      return mid;
    }

    if (array[mid] < search) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

  }
  return -1;
};

let onSubmit = function () {
  search = parseInt(document.getElementById("valueToBeSearch").value); 
  // Always check the value that either the value is in string or in other type
  // use ParseInt in case of string to change that value in int from string. 
  console.log("value to be search",  search);

  const resultIndex = binarySearch(array, search);
  console.log("value of result index", resultIndex)
  if (resultIndex) {
    document.getElementById("searchedNumber").innerHTML = "Number found at index :" + resultIndex;
  }
  if (resultIndex == -1) {
    document.getElementById("searchedNumber").innerHTML = "Number is not found at any index";

  }
}

document.getElementById("button").addEventListener("click", onSubmit);


// if (binarySearch(array, search))
//   document.write("Element found. <br>");
// else document.write("Element not found. <br>");

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
