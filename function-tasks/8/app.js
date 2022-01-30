//  Write a JavaScript function which says whether a number is perfect.
function perfectNumber() {
  x = document.getElementById("numberEntered").value;
  console.log("value entered", x);
  result = 0;
  for (var i = 1; i <= x / 2; i++) {
    if (x % i === 0) {
      result += i;
      console.log("result", result);
    }
  }
  if (result === x && result != 0) {
    document.getElementById("perfectOutput").innerHTML =
      "the number is a perfect number";
  } 
  else {
    document.getElementById("perfectOutput").innerHTML =
      "the number is NOT a perfect number";
  }
}
document.getElementById("button").addEventListener("click", perfectNumber);
