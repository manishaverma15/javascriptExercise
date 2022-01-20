// Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.
function increasingOrder() {
  x = document.getElementById("firstNumber").value;
  console.log("first Number", x);
  y = document.getElementById("SecondNumber").value;
  console.log("SecondNumber", y);
  z = document.getElementById("ThirdNumber").value;
  console.log("ThirdNumber", z);
  if (y > x && z > y) {
    document.getElementById("paragraph").innerText = "Strict Order";
  } else if (z > y && y < x) {
    document.getElementById("paragraph").innerText = "Soft Order";
  } else {
    document.getElementById("paragraph").innerText = "Undefined";
  }
}
document.getElementById("button").addEventListener("click", increasingOrder);
