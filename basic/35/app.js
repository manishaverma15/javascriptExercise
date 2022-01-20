//  Write a JavaScript program to check from two given integers
//  whether one of them is 8 or their sum or difference is 8.
function eight() {
  x = parseInt(document.getElementById("firstNumber").value);
  console.log("first Number", x);
  y = parseInt(document.getElementById("SecondNumber").value);
  console.log("second Number", y);
  z = x + y;

  console.log("sum is", z);
  var k = Math.abs(x - y);
  console.log("Difference is", k);

  if (x == 8 || y == 8) {
    document.getElementById("paragraph").innerText =
      "From given numbers one number is eight";
  }

  if (z == 8 ) {
    document.getElementById("paragraph").innerText =
      "sum is 8";
  }
  if( k == 8){
    document.getElementById("paragraph").innerText =
      " difference is 8";
  }

}
document.getElementById("button").addEventListener("click", eight);
