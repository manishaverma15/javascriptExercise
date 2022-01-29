//  Write a JavaScript function that returns array elements larger than a number.
let array = [12, 44, 23, 54, 65, 77, 89, 78];
console.log("array Elements", array);
document.getElementById("arrayOutput").innerHTML = array;

function greaterArray(search) {
    let userEnter = document.getElementById("enteredElement").value
    console.log("user Enter Element", userEnter);
    return (search > userEnter);
}

function largerElementsInArray() {

    let result = array.filter(greaterArray);
    console.log("result", result);
    document.getElementById("elementEntered").innerHTML = result;

    // 2ND Method >>>>>>>>>>
    // for(i=0;i<=array.length-1;i++){
    //  let  arrayElement=array[i];
    //  console.log("arrayElements",arrayElement)
    //  let result= userEnter < arrayElement

    //  if (result)
    //     console.log("result", arrayElement);
    // }
    // let result =array.filter(userEnter>array)
    // console.log("result",result);
}
document.getElementById("button").addEventListener('click', largerElementsInArray);